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
                "bayer_hash": "d66d33b2a6b5485f4945d0d6a0cb28a75e3eac5d104e46eaa920849c8a8ef926",
                "supplier_hash": "nil",
                "distributor_hash": "nil",
                "customer_hash":"nil",
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
            let hash  = crypto.createHash('sha256').update(id_product).digest('base64');
            const product = {
                product_id: id_product,
                product_name: name_product,
                owner: "Bayer AG",
                current_stage_num: 0,
                supplier: "nil",
                distributor: "nil",
                status: "factory",
                delivery_rating: "nil",
                bayer_hash: hash,
                supplier_hash: "nil",
                distributor_hash: "nil",
                customer_hash: "nil",
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
            if (!request || request.length === 0) {
                console.log("Your product is unauthentic. Please contact Bayer");
            }
            else{
                    const res = JSON.parse(request);
                    if(distributor_key!="rmhfse"){
                        console.log("**********");
                        console.log("Incorrect distributor id, please try again. ");
                        console.log("**********");
                    }
                    else if(res.current_stage_num!=0){
                        console.log("Your product's supply chain has been broken, please contact Bayer.");
                    }
                    else{
                        console.log("**********");
                        console.log("Your product ownership has been successfully transferred to Distributor XYZ");
                        console.log("**********");
                        let dig_sign = id_product + distributor_key;
                        let hash  = crypto.createHash('sha256').update(dig_sign).digest('base64');
                        res.owner = "Distributor XYZ",
                        res.current_stage_num = 1;
                        res.distributor = "Distributor XYZ";
                        res.status = "At distributor XYZ";
                        res.distributor_hash = hash;
                        await ctx.stub.putState(id_product, Buffer.from(JSON.stringify(res)));
                    }
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
            if (!request || request.length === 0) {
                console.log("********");
                console.log("Your product is unauthentic. Please contact Bayer");
                console.log("********");
            }
            else{
                const res = JSON.parse(request);
                if(supplier_key!="qshwfe"){
                    console.log("*******");
                    console.log("Incorrect supplier id, please try again. ");
                    console.log("*******");
                }
                else if(res.current_stage_num!=1){
                    console.log("******");
                    console.log("Your product's supply chain has been broken, please contact Bayer.");
                    console.log("******");
                }
                else{
                    console.log("**********");
                    console.log("Your product ownership has been successfully transferred to Supplier ABC");
                    console.log("********");
                    let dig_sign = id_product + supplier_key;
                    let hash  = crypto.createHash('sha256').update(dig_sign).digest('base64');
                    res.supplier_hash = hash;
                    res.owner = "Supplier ABC",
                    res.current_stage_num = 2;
                    res.supplier = "Supplier ABC";
                    res.status = " At supplier ABC";
                    await ctx.stub.putState(id_product, Buffer.from(JSON.stringify(res)));
                }
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
            if (!request || request.length === 0) {
                console.log("Your product is unauthentic. Please contact Bayer");
            }
            else{
                const res = JSON.parse(request);
                if(customer_key!="bhnkmk"){
                    console.log("*******");
                    console.log("Incorrect customer id, please try again. ");
                    console.log("*******");
                }
                else if(res.current_stage_num!=2){
                    console.log("******");
                    console.log("Your product's supply chain has been broken, please contact Bayer.");
                    console.log("******");
                }
                else{
                    console.log("**********");
                    console.log("Your product ownership has been successfully transferred to Customer PQR");
                    console.log("********");
                    let dig_sign = id_product + customer_key;
                    let hash  = crypto.createHash('sha256').update(dig_sign).digest('base64');
                    res.customer_hash = hash;
                    res.owner = "Customer PQR",
                    res.current_stage_num = 3;
                    res.status = "Delivered to Customer PQR";
                    res.delivery_rating = rating;
                    await ctx.stub.putState(id_product, Buffer.from(JSON.stringify(res)));
                }
            }
        }
        else{
            console.log("You do not have access to perform this operation");
        }
    }

}

module.exports = ProductAuthenticity;