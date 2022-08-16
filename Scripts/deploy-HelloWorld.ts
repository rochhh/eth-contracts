import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function foo(){
    const HelloWorld = await ethers.getContractFactory("HelloWorld")
    const hello = HelloWorld.deploy()
    await (await hello).deployed()

    return hello
}

async function deploy(){
    const hello = await foo()
    return hello
}

// @ts-ignore
async function sayHello( hello ){
    console.log( " Say hello : ", await hello.hello())
}

deploy().then(sayHello)