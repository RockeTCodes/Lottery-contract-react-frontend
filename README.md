

## Lottery Frontend
This is the frontend of the lottery contract . The actual contract code is available in my repository https://github.com/RockeTCodes/ethereum-contract-lottery .This is based on lottery contract made on solidity v0.8.17 .{Updated version}

I have used react functional component . Although the course I am watching is using React Classes.

This contract allows users to enter themselves into the lottery . When the manager calls pick winner function the total money is sent to the winner .

The pickWinner method can only be called by the Manager ( The person ho initiated it ) . Any number of people can enter the lottery . When the manager calls the pickWinner then the contract will pick a winner from the list of winners and send all the money from the prize pool to the winners . The players will need to send some eth to enter the contest . {any value greater than 0.01 ether ) .

Use with caution while deploying to main ethereum network as it can cause loss of money .

The newer version is deployed at Goerli Test Network at address : 0x54E707d104Db5F95a2668f678899A9ec3587310E

The new version is made using Solidity ^0.8.17 . (Latest as of December 2022).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
