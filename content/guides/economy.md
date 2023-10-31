---
title: "Economy 101"
image:
  src: "/images/minecraft_title.png"
  alt: "Halara Logo"
description: |
  In this post, you can find a quick-start guide to Halara’s economy. The server's economical structure features a use 
  of virtual-currency (similar to a bank account) as well as "physical" currency tokens(similar to coins). It also uses 
  a variety of shop-types such as sign shops, villager shops, npc shops, and more.
---

## Introduction & Balance
All users come into the server the same way you came into the real world: with $0.00 in your bank account.
Not to fret, you can start earning in-game currency as soon as you join. But before you start earning all
that money, you'll need to learn how to check the balance of your bank account:

- ``/balance [player]`` displays the amount of in-game-currency the player currently has.

- ``/balancetop`` displays the server's wealthiest users in order.

## Worth & Selling to the Server
When you're ready to start earning some cold, hard cash, you can start by selling items and blocks from
your inventory. Almost every in-game item can be sold to the server, each with their own worth. As a general
rule of thumb, the rarer the item is, the more valuable it is. In addition to this, bigger stacks of items 
sell for more (...duh).
### Determining an item's worth
Before you sell your most prized posessions to the server, you'll probably want to know just how much you'll
get for it. There are two ways of determining just how much money the server will grant you for selling your
items:

- ``/worth`` calculates the worth of the item stack in your hand.

- ``/worth <item> [amount]`` calculates the worth of the item stack specified.

### Selling to the server
When you're ready to start selling some items, you can use the commands below to sell items from your
inventory in exchange for in-game currency:

- ``/sell <item> [amount]`` will sell all (or a specified amount) of a specified item in your inventory.

- ``/sell hand [amount]`` will sell all (or a specified amount) of the item you are currently holding.

***

## Buying from the Sevrer
### Public Market Waypoints
Now that you've successfully become filthy-rich by selling your soul to Hollywood, it's time to spend
some of that worthless digital currency! There are several ways to spend your money, perhaps the easiest
of which is buying items from the server. When you're ready to visit the server's in-game market, you can
teleport to the warp waypoints *Shop* and *Town*.

- ``/warp <name>`` teleports your player to a server waypoint.

- ``/warps`` displays which server-wide waypoints you can currently teleport to.

- ``/warp Shop`` teleports your player to the server's general market.

- ``/warp Town`` teleports your player to the server's roleplay-items market.

### Using the Server's Sign Shops
If you're buying items from the server's super-advanced, high-tech sign shops, you can buy and sell items
in bulk and as many times as your little heart desires. When using server-owned sign shops, they will look
similar to the one pictured below:

![](/images/server-shop.jpg)

#### Figure 1
The figure above shows an example of a Server Shop that is selling one (1) Diamond for $50 and buying
one (1) diamond for $25. **When using sign shops, USE ITEM (default: Right-Click) purchases items and
ATTACK (default: Left-Click) sells items.**
1. The first line indicates that it is, infact, a **Server Shop**
2. The second line on each sign-shop shows **the amount of items you are buying/selling** at once.
3. The third line on each sign-shop shows **the buy & sell prices of the items in question**. In the
figure above, the shop is selling **one (1) item** for **$50** and will buy them from your player
at a rate of **$25 each**.
4. The fourth and final line on each sign-shop shows **the item being marketed**. In this example,
the item being marketed is a **Diamond**.

***
	
## Payment & Currency Tokens
In the economy of many popular Minecraft servers, there exist a payment command to easily send money from
one player's account to another. Halara has disabled this command (lol get pwned). In order to get around this,
in-game currency must be transferred into Currency Tokens (we'll talk about how in just a bit!) Just like Apple
with the headphone jack, Halara is passionate about making changes to encourage you to spend money. So- let's get
spending... with currency tokens!
### Using Currency Tokens
Just like the real world, Halara makes use of "physical" currency in the form of currency tokens. These
are used for several reasons, including payment to other users and npc shops. Just like children, not all
currency tokens are created equally. Although they are similar in appearance, the description of each token
indicates it's worth if transferred to virtual currency. There are a set number of values that a token item
may be worth, and they are as follows:
#### Gold Tokens
- $1 Token
- $5 Token
- $10 Token
- $20 Token
- $50 Token
- $100 Token
- $500 Token
#### Blue Tokens
- $1,000 Token
- $5,000 Token
- $10,000 Token
- $20,000 Token
- $50,000 Token
- $100,000 Token
- $500,000 Token
#### Green Tokens
- $1,000,000 Token
- $5,000,000 Token
- $10,000,000 Token
- $50,000,000 Token
- $100,000,000 Token
- $500,000,000 Token
#### Pink Tokens
- $1,000,000,000 Token

#### Converting to/from Currency Tokens
Currency token items can be converted to/from digital currency with the following commands:

- ``/withdraw <amount>`` extracts the specified amount from your bank account into currency tokens.
	- Creating currency token items will drop the items at the user's feet.
	- The amount specified is granted in the minimum number of tokens possible.

- ``/deposit`` converts all currency token items from your inventory into digital currency.