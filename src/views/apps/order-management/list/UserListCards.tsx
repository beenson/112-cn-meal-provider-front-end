// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { UserDataType } from '@components/card-statistics/HorizontalWithSubtitle'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

// Vars
const data: UserDataType[] = [
  {
    title: 'Pending Payment',
    value: '21,459',
    avatarIcon: 'tabler-users',
    avatarColor: 'primary',
    change: 'positive',
    changeNumber: '29%',
    subTitle: ''
  },
  {
    title: 'Completed',
    value: '4,567',
    avatarIcon: 'tabler-user-plus',
    avatarColor: 'error',
    change: 'positive',
    changeNumber: '18%',
    subTitle: ''
  },
  {
    title: 'Refunded',
    value: '19,860',
    avatarIcon: 'tabler-user-check',
    avatarColor: 'success',
    change: 'negative',
    changeNumber: '14%',
    subTitle: ''
  },
  {
    title: 'Failed',
    value: '237',
    avatarIcon: 'tabler-user-search',
    avatarColor: 'warning',
    change: 'positive',
    changeNumber: '42%',
    subTitle: ''
  }
]

const UserListCards = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserListCards
