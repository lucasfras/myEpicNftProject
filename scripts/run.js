const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT'); //creating/compiling the local files to get necessary files to work artifacts
    const nftContract = await nftContractFactory.deploy(); //create ah ethereum network and deploy the smart contract there then after completed it wil destroy the network created earlier
    await nftContract.deployed(); // waiting unting the contract get deployed successfully;
    console.log("The contract has just been deployed to address:", nftContract.address);


    for(let i = 0; i <= 50; i++) {
        try {
            let txn = await nftContract.makeAnEpicNFT();
            await txn.wait();
            console.log("Minted nft", i);
        } catch (err) {
            console.log("Error minting nft", i, err);
        }
    }




}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

runMain();
