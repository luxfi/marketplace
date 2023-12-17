import { ConnectButton } from '@rainbow-me/rainbowkit'
import Box from 'components/primitives/Box'
import Button from 'components/primitives/Button'
import { FC } from 'react'

type Props = {}

export const ConnectWalletButton: FC<Props> = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        return (
          <Box
            style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'flex',
            }}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Button
                    color='primary'
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect
                  </Button>
                )
              }
            })()}
          </Box>
        )
      }}
    </ConnectButton.Custom>
  )
}
