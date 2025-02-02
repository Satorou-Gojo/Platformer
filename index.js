
  
const contractAddress = "0x7E4633aDac6080DB1A8E5fD28dE5DF34070dd695"; // Replace with your contract address
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "ERC721EnumerableForbiddenBatchMint",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "ERC721OutOfBoundsIndex",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


let playerAddress='';
async function connect() {

    if (!window.ethereum) {
        console.error("❌ MetaMask not found in window.ethereum");
        alert("MetaMask is required to mint NFTs.");
        return;
    }
    
    // 🛠 FIX: Ensure user is connected before calling mint function
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(`Wallet connected: ${accounts[0]}`); // Request connection
    playerAddress=accounts[0]
    

    
    
}
connect();

async function mintEnemyNFT(playerAddress) {
    try {
        const tokenId = Math.floor(Math.random() * 1000000); // Generate a random token ID
        console.log(`⚔️ Minting NFT to ${playerAddress} with Token ID: ${tokenId}...`);
        const provider = new ethers.providers.Web3Provider(window.ethereum,"sepolia");
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const tx = await contract.safeMint(playerAddress, tokenId);
        await tx.wait();

        console.log(`✅ NFT Minted! Token ID: ${tokenId}`);
        alert("NFT Minted Successfully!");
    } catch (error) {
        console.error("❌ Minting Failed:", error);
        alert("NFT Minting Failed! Check console for errors.");
    }
}
const canvas= document.querySelector('canvas')
const c= canvas.getContext('2d')

canvas.width=1024
canvas.height=555

const gravity=0.5


let goldSword = null


function     checkCollision(player, block) {
    return (
        player.hitbox.position.x + player.hitbox.width > block.x && // Right of player touches left of block
        player.hitbox.position.x < block.x + block.width && // Left of player touches right of block
        player.hitbox.position.y + player.hitbox.height > block.y && // Bottom of player touches top of block
        player.hitbox.position.y < block.y + block.height // Top of player touches bottom of block
    );
}

const player= new Player({
    position: {
    x:200,
    y:360,
        },
    collisionBlocks,
    imageSrc: "./img/Warrior/_Idle.png",
    scale: 2,
    framerate:10,
    animations: {
        Idle: {
            imageSrc: "./img/Warrior/_Idle.png",
            framerate: 10,
            framebuffer: 2,
        },
        Run: {
            imageSrc: "./img/Warrior/_Run.png",
            framerate: 10,
            framebuffer:2,
        },
        Jump: {
            imageSrc: "./img/Warrior/_Jump.png",
            framerate: 3,
            framebuffer:1,
        },
        Attack: {
            imageSrc: "./img/Warrior/_Attack2.png",
            framerate: 6,
            framebuffer:4,
        },
        Idleleft: {
            imageSrc: "./img/Warrior/Idleleft.png",
            framerate: 10,
            framebuffer: 2,
        },
        Runleft: {
            imageSrc: "./img/Warrior/Runleft.png",
            framerate: 10,
            framebuffer:2,
        },
        Jumpleft: {
            imageSrc: "./img/Warrior/Jumpleft.png",
            framerate: 3,
            framebuffer:1,
        },
        Attackleft: {
            imageSrc: "./img/Warrior/Attackleft.png",
            framerate: 6,
            framebuffer:4,
        },
    }
})

const DEBUG_MODE = false; // Add at top of file

const enemy = new Enemy({
    position: {
        x: 800,  // Adjust this value to position enemy where you want
        y: 260   // Adjust this value for height
    },
    imageSrc: "./img/enemy/Idle.png",  // Your enemy image path
    framerate:4,
    animations: {
        Idle: {
            imageSrc: "./img/enemy/Idle.png",
            framerate: 4,
            framebuffer: 8
        },
        TakeHit: {
            imageSrc: "./img/enemy/Take Hit.png",
            framerate: 4,
            framebuffer: 8
        },
        Death: {
            imageSrc: "./img/enemy/Death.png",
            framerate: 4,
            framebuffer: 8
        }
    }
})

const enemy2 = new Enemy({
    position: {
        x: 50,  // Adjust this value to position enemy where you want
        y: 360   // Adjust this value for height
    },
    imageSrc: "./img/enemy2/Idle.png",  // Your enemy image path
    framerate:4,
    animations: {
        Idle: {
            imageSrc: "./img/enemy2/Idle.png",
            framerate: 4,
            framebuffer: 8
        },
        TakeHit: {
            imageSrc: "./img/enemy2/Take Hit.png",
            framerate: 4,
            framebuffer: 8
        },
        Death: {
            imageSrc: "./img/enemy2/Death.png",
            framerate: 4,
            framebuffer: 8
        }
    }
})


const keys = {
    d: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    g:{
        pressed: false,
    }
  }

  const backgroundScale = Math.min(canvas.width / 3072, canvas.height / 1664);

  const background = new Sprite({
      position: { x: 0, y: 0 },
      imageSrc: "./img/moon1.png",
      scale: backgroundScale
  });


function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle='white'
    c.fillRect(0,0,canvas.width, canvas.height)
    background.update()
    enemy2.update(player)
    enemy.update(player)

   
    player.update()
    player.velocity.x=0
    if (keys.d.pressed && player.hitbox.position.x< 984){ 
        player.swapSprite('Run')
        player.Direction='right'
        player.velocity.x = 4
    }
    else if(keys.a.pressed && player.hitbox.position.x>4){
        player.swapSprite('Runleft')
         player.velocity.x = -4
         player.Direction='left'
    }
    else if(player.velocity.y===0) {
        if(player.Direction=='right') player.swapSprite('Idle')
        else player.swapSprite('Idleleft')
    }
    if (player.velocity.y<0){
        if(player.Direction=='right') player.swapSprite('Jump')
        else player.swapSprite('Jumpleft')
    }
    if(keys.g.pressed){
        if(player.Direction=='right') player.swapSprite('Attack')
        else player.swapSprite('Attackleft')
    }
    

}

animate()



window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        break
      case 'a':
        keys.a.pressed = true
        break
      case 'w':
        player.velocity.y = -15
        break
       case 'g':
        keys.g.pressed = true
        break
    }
  })
  
  window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'd':
        keys.d.pressed = false
        break
      case 'a':
        keys.a.pressed = false
        break
        case 'g':
            keys.g.pressed = false
            break
    }
  })
