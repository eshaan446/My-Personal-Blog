---
title: 'Consensus mechanism in Blockchain Technology'
date: '2022-02-01'
---

By now each one of you would be familiar with the term "**Blockchain**" and "**Web 3.0**" and why does it matter to us.

It is probably the best time to get started in this field as it is still nascent.

But, first learning about the fundamentals of the blockchain technology is important. Starting with it, we should know about the consensus mechanisms used in various cryptocurrencies._(Bitcoin (BTC) ₿, Ethereum (ETH) ⧫, Solana (SOL), Dogecoin (DOGE)_, etc)

Now a consensus problem in blockchain requires agreement among many processes (or participants in the network) for a single data value.

But the question is, how can we reach a decision in blockchain where everyone agrees or reaches consensus that too in an open network such as blockchain ?

Well there are various consensus mechanisms used to solve such problem namely _PoW, PoS, PoB, PoET_.

Let us see what are the ideas used behind such mechanisms.

## 1-Proof-Of-Work (PoW):
The "Proof-Of-Work" or "PoW" is a fully decentralized consensus used in permissionless models. Proof of work is used widely in cryptocurrency mining, for validating transactions and mining new tokens. It is the most popular consensus mechanism that is employed by blockchains such as Bitcoin, Ethereum and Litecoin for its simplicity and resistance to a wide variety of cyber attacks.

## 2-Proof -Of-Stake (PoS):
The Proof-Of-Stake is an algorithm employed by cryptocurrency protocol to reach consensus in an open network .The concept of PoS was first introduced on the Bitcointalk forums in July 2011 as a way to make the process of verifying blocks more efficient than employing PoW consensus algorithms. Many popular cryptocurrencies use some variation of PoS protocol for e.g- Solana, Polkadot, VeChain,etc.Infact many popular cryptocurrencies are working towards replacing their PoW mechanisms with PoS.

## 3-Proof-Of-Burn(PoB):
The Proof-of-Burn(PoB) is a mechanism with minimal energy consumption. Being an alternative, it is often called as "PoW without energy waste". In PoB the block-adder should show proof that they have burned some coins. It works by burning virtually generated PoW coins. The Proof-Of-Burn consensus mechanism is employed by Counterparty(XCP), Factom(FCT), etc. Slimcoin(SLM) is an open-source cryptocurrency that uses both PoB, PoS and PoW for generating tokens as well as for burning them in virtual PoB mining.

## 4-Proof-Of-Elapsed Time(PoET):
The Proof-of-Elapsed Time(PoET) is a consensus mechanism algorithm used on permissioned blockchain networks. It was proposed by Intel as a part of it's "Hyperleger Sawtooth"(a platform to build decentralized applications).In PoET , a special verification is required from the node or participant before joining the network, verified by Intel SGX(Intel Software Guard Extension). We can use Proof-Of-Elapsed time(PoET) consensus mechanism to bootstrap the network, which is not possible in PoS and PoB.