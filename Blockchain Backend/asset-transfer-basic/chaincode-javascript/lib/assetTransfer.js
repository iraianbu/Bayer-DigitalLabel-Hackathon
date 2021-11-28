'use strict';

const { Contract } = require('fabric-contract-api');
const crypto = require('crypto');

//org1 MSP is Bayer's peer and Org2 MSP is the proxy peer

class ProductAuthenticity extends Contract {

    async initLedger(ctx) {
        const all_products = [
            {
                "product_id": "4av5x8",
                "product_name": "Flint Extra Fungicide",
                "owner": "Bayer AG",
                "current_stage_num": 0,
                "supplier":"nil",
                "distributor":"nil",
                "status":"factory",
                "delivery_rating":"nil",
            },
        ];

        for(const product of all_products) {
            await ctx.stub.putState(product.product_id, Buffer.from(JSON.stringify(product)));
            console.info(`Request ${product.product_id} has been submitted`);  
        }
    }

    async GetAllProductStats(ctx) {
        const allResults = [];
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: result.value.key, Record: record });
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }

    async AddProduct(ctx, id_product, name_product) {
        let resval = ctx.clientIdentity.getMSPID();
        if(resval==="Org1MSP"){ //ensuring that the user is from Org1 (Bayer)
            const product = {
                product_id: id_product,
                product_name: name_product,
                owner: "Bayer AG",
                current_stage_num: 0,
                supplier: "nil",
                distributor: "nil",
                status: "factory",
                delivery_rating: "nil",
            };
            console.log("Product has been added into the blockchain successfully");
            await ctx.stub.putState(id_product, Buffer.from(JSON.stringify(product)));
            return JSON.stringify(product);
        }
        else{
            console.log("You do not have access to perform this operation");
        }
    }

    async ReceivedbyDistributor(ctx, id_product, distributor_key) {
        let resval = ctx.clientIdentity.getMSPID();
        if(resval==="Org2MSP"){ //ensuring that the user is from Org2 (Proxy)
            const request = await ctx.stub.getState(id_product);
            const res = JSON.parse(request);
            if(request!=null && distributor_key==="rmhfse" && res.current_stage_num==0){
                res.owner = "Distributor ABC",
                res.current_stage_num = 1;
                res.distributor = "Distributor ABC";
                res.status = "distributor";
                await ctx.stub.putState(id_product, Buffer.from(JSON.stringify(res)));
            }
            else{
                console.log("Incorrect distributor id / invalid product, please try again. ")
            }
        }
        else{
            console.log("You do not have access to perform this operation");
        }   
    }

    async ReceivedbySupplier(ctx, id_product, supplier_key) {
        let resval = ctx.clientIdentity.getMSPID();
        if(resval==="Org2MSP"){ //ensuring that the user is from Org2 (Proxy)
            const request = await ctx.stub.getState(id_product);
            const res = JSON.parse(request);
            if(request!=null && supplier_key==="qshwfe" && res.current_stage_num==1){
                res.owner = "Supplier ABC",
                res.current_stage_num = 2;
                res.supplier = "Supplier ABC";
                res.status = "supplier";
                await ctx.stub.putState(id_product, Buffer.from(JSON.stringify(res)));
            }
            else{
                console.log("Incorrect supplier id / invalid product, please try again. ")
            }
        }
        else{
            console.log("You do not have access to perform this operation");
        }   
    }

    async ReceivedbyCustomer(ctx, id_product, customer_key, rating) {
        let resval = ctx.clientIdentity.getMSPID();
        if(resval==="Org2MSP"){ //ensuring that the user is from Org2 (Proxy)
            const request = await ctx.stub.getState(id_product);
            const res = JSON.parse(request);
            if(request!=null && customer_key==="bhnkmk" && res.current_stage_num==2){
                res.owner = "Customer ABC",
                res.current_stage_num = 3;
                res.status = "Delivered to Customer";
                res.delivery_rating = rating;
                await ctx.stub.putState(id_product, Buffer.from(JSON.stringify(res)));
            }
            else{
                console.log("Incorrect customer id / invalid product, please try again. ")
            }
        }
        else{
            console.log("You do not have access to perform this operation");
        }
    }

}

module.exports = ProductAuthenticity;