'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'
import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Third-party Imports
import classnames from 'classnames'

// Vars
const data = [
  {
    title: '0',
    subtitle: 'Total Amount',
    icon: 'tabler-user'
  },
  {
    title: '0',
    subtitle: 'Number of Orders',
    icon: 'tabler-file-invoice'
  },
  {
    title: '0',
    subtitle: 'Unpaid Amount',
    icon: 'tabler-checks'
  },
  {
    title: '0',
    subtitle: 'Number of Unpaid Orders',
    icon: 'tabler-circle-off'
  }
]

// write function get number return string with comma
function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const InvoiceCard = ({ invoiceData }: { invoiceData: InvoiceType[] }) => {
  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const total = invoiceData.reduce((acc, item) => acc + item.total, 0)
  const unpaid = invoiceData.reduce((acc, item) => acc + item.balance, 0)
  const count = invoiceData.length
  const unpaidOrders = invoiceData.filter(invoice => invoice.balance > 0).length
  data[0].title = numberWithCommas(total)
  data[1].title = numberWithCommas(count)
  data[2].title = numberWithCommas(unpaid)
  data[3].title = numberWithCommas(unpaidOrders)

  return (
    <Card>
      <CardContent>
        <Grid container spacing={6}>
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              className={classnames({
                '[&:nth-of-type(odd)>div]:pie-6 [&:nth-of-type(odd)>div]:border-ie':
                  isBelowMdScreen && !isBelowSmScreen,
                '[&:not(:last-child)>div]:pie-6 [&:not(:last-child)>div]:border-ie': !isBelowMdScreen
              })}
            >
              <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                  <Typography variant='h4'>{item.title}</Typography>
                  <Typography>{item.subtitle}</Typography>
                </div>
                <Avatar variant='rounded' className='is-[42px] bs-[42px]'>
                  <i className={classnames(item.icon, 'text-[26px]')}></i>
                </Avatar>
              </div>
              {isBelowMdScreen && !isBelowSmScreen && index < data.length - 2 && (
                <Divider
                  className={classnames('mbs-6', {
                    'mie-6': index % 2 === 0
                  })}
                />
              )}
              {isBelowSmScreen && index < data.length - 1 && <Divider className='mbs-6' />}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default InvoiceCard
