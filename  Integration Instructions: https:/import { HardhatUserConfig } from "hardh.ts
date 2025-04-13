import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: true });

const config: HardhatUserConfig = {
      solidity: "0.8.19",
        networks: {
                virtual_mainnet: {
                          url: "https://virtual.mainnet.rpc.tenderly.co/5c6ade54-e80c-441c-a0b7-38eb4f324254",
                                chainId: 1,
                                      currency: "VETH"
                },
        },
          tenderly: {
                // https://docs.tenderly.co/account/projects/account-project-slug
                    project: "project",
                        username: "lit",
          },
};

export default config;
          }
                }
        }
}