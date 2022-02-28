import { useEffect, useState } from 'react'
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  TextField,
} from '@mui/material'
import { useStyles } from '../../styles/PaymentModal/paymentmodal.style'
import {
  useMoralis,
  useWeb3Transfer,
  useMoralisQuery,
  useNewMoralisObject,
} from 'react-moralis'
import { Moralis } from 'moralis'

const PaymentModal = ({ open, setOpen, handleOpen, handleClose, data }) => {
  const classes = useStyles()
  const [amount, setAmount] = useState(0.0001)
  const [metamaskAddress, setMetamaskAddress] = useState('')

  const { web3, enableWeb3, isWeb3Enabled, user } = useMoralis()

  // const {
  //   data: ideaData,
  //   error: queryError,
  //   isLoading,
  // } = useMoralisQuery(
  //   'User',
  //   (query) => query.equalTo('objectId', data && data.createdBy),
  //   [data],
  //   {
  //     live: true,
  //   }
  // )

  // const {
  //   isSaving,
  //   error: contribError,
  //   save,
  // } = useNewMoralisObject('Contribution')

  // var ideaId = data?.objectId
  // var contributorId = user?.get('objectId')

  // useEffect(() => {
  //   console.log(window.ethereum._state.accounts)
  //   var json = JSON.stringify(ideaData, null, 2)
  //   var obj = JSON.parse(json)
  //   setMetamaskAddress(obj[0] && obj[0].metaMaskAddress)
  //   console.log(obj)
  //   if (!error) {
  //     save({ amount, ideaId, contributorId })
  //   }
  // }, [isWeb3Enabled, ideaData, metamaskAddress])

  console.log(metamaskAddress)
  const { fetch, error, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.ETH(amount),
    receiver: 0xc29681d14b51b8db30a7584e4d3505d2fb78d5b6,
    type: 'native',
  })

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.container}>
            <Typography variant='modalHeader'>
              Contribute to this project
            </Typography>
            <Typography variant='modalDesc' className={classes.modalDesc}>
              Your contribution will help this idea to grow and make an impact
              to the world!
            </Typography>
            <div className={classes.fieldWrapper}>
              <TextField
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter Amount'
                className={classes.field}
              />
              <div className={classes.eth}>Eth</div>
            </div>
            <div className={classes.btnWrapper}>
              {!isWeb3Enabled ? (
                <Button
                  variant='contained'
                  color='button'
                  className={classes.btn}
                  onClick={() => enableWeb3()}
                  disabled={isWeb3Enabled}
                >
                  Connect with Metamask
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='button'
                  className={classes.btn}
                  onClick={() => fetch()}
                  disabled={isFetching}
                >
                  Contribute
                </Button>
              )}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default PaymentModal
