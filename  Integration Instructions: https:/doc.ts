// Integration Instructions: https://docs.tenderly.co/node/integrations-smart-contract-frameworks/hardhat
import { HardhatUserConfig, task, types } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";
import * as dotenv from 'dotenv';

dotenv.configure();
tenderly.setup({ automaticVerifications: true });

const config: HardhatUserConfig = {
      solidity: "0.8.19",
        defaultNetwork: "tenderly",
          networks: {
                tenderly: {
                          url: "https://holesky.gateway.tenderly.co/1WenWUzPtypopnnLR4Qbvw",
                                chainId: 17000,
                },
          },
            tenderly: {
                    username: "lit",
                        project: "project",
            },
};
            }
                }
          }
}