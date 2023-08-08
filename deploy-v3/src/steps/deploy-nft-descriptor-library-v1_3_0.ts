import NFTDescriptor from '../artifacts/contracts/v3-periphery/libraries/NFTDescriptor.sol/NFTDescriptor.json'
import createDeployLibraryStep from './meta/createDeployLibraryStep'

export const DEPLOY_NFT_DESCRIPTOR_LIBRARY_V1_3_0 = createDeployLibraryStep({
  key: 'nftDescriptorLibraryAddressV1_3_0',
  artifact: NFTDescriptor,
})
