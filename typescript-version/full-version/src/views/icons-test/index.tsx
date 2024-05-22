'use client'

// MUI Imports
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Third-party Imports
import classnames from 'classnames'

const IconsTest = ({ data }: { data: string[] }) => {
  return (
    <>
      <Typography variant='h5'>All the icons are made with the help of our custom component.</Typography>
      <Typography variant='h4' className='mbs-8 mbe-4'>
        Icons from APIs
      </Typography>
      <Typography variant='h5' className='mbe-4'>
        Online Icons
      </Typography>
      <Typography>
        BoxIcons coming from Iconify&#39;s API
        <i className='bx-x' />
      </Typography>

      <Typography variant='h5' className='mlb-4'>
        FakeDB Remix icons but offline
      </Typography>
      <Typography className='mbe-4'>
        Remix icons coming from our API (Next.js API) and SVGs are from the Iconify Bundle
      </Typography>
      {data.map((icon: string, index: number) => (
        <i key={index} className={classnames(icon, 'text-4xl')} />
      ))}

      <Typography variant='h4' className='mbs-8 mbe-4'>
        Offline Icons
      </Typography>
      <Typography className='mbe-4'>
        Iconify icons come with the following props as well: <code>id</code>, <code>key</code>, <code>name</code>,{' '}
        <code>ref</code>, <code>role</code>, <code>strokeLinecap</code>.
      </Typography>

      <Typography className='font-medium'>Material Line Icons with height</Typography>
      <i className='line-md-home-twotone-alt text-4xl' />
      <i className='line-md-github text-4xl' />
      <i className='line-md-document-list text-4xl' />
      <i className='line-md-document-code text-4xl' />
      <i className='line-md-image-twotone text-4xl' />

      <Typography className='mbs-4 font-medium'>Remix Icons</Typography>
      <Typography>
        Simple Remix Icon
        <i className='tabler-bike' />
      </Typography>
      <Typography className='flex items-center'>
        Remix Icon wrapped with <code>Box</code> component
        <Box component='span' className='mis-5 inline-flex text-success'>
          <i className='tabler-bike' />
        </Box>
      </Typography>
      <Typography>
        Remix Icon with font-size
        <i className='tabler-bike text-5xl' />
      </Typography>
      <Typography>
        Remix Icon with color and passed color-name
        <i className='tabler-bike text-red-500' />
      </Typography>
      <Typography>
        Remix Icon with color using CSS modules
        <i className='tabler-bike text-[#09a6eb] text-lg' />
      </Typography>
      <Typography>
        Remix Icon with style
        <i className='tabler-bike' style={{ color: '#00f' }} />
      </Typography>
      <Typography>
        Remix Icon with horizontal flip
        <i className='tabler-bike -scale-x-100 scale-y-100' />
      </Typography>
      <Typography>
        Remix Icon with vertical flip
        <i className='tabler-bike scale-x-100 -scale-y-100' />
      </Typography>
      <Typography>
        Remix Icon with vertical & horizontal flips
        <i className='tabler-bike -scale-x-100 -scale-y-100' />
      </Typography>
      <Typography>
        Remix Icon with rotate 90 degree
        <i className='tabler-bike rotate-90' />
      </Typography>
      <Typography>
        Remix Icon with rotate 270 degree
        <i className='tabler-bike -rotate-90' />
      </Typography>
      <Typography>
        Remix Icon with width
        <i className='tabler-bike is-24' />
      </Typography>
      <Typography>
        Remix Icon with height
        <i className='tabler-bike bs-20' />
      </Typography>
      <Typography>
        Remix Icon with cursor pointer
        <i className='tabler-bike cursor-pointer' />
      </Typography>
      <Typography>
        Remix Icon with display flex
        <i className='tabler-bike flex' />
      </Typography>
      <Typography>
        Remix Icon with onClick. It has all props for <code>on</code>
        <i className='tabler-bike' onClick={() => alert('Clicked on the icon')} />
      </Typography>
      <Typography>
        Remix Icon with opacity using string
        <i className='tabler-bike opacity-60' />
        Remix Icon with opacity using number
        <i className='tabler-bike opacity-30' />
      </Typography>
      <Typography>
        Remix Icon with transform scale
        <i className='tabler-bike scale-[2]' />
      </Typography>
      <Typography>
        Remix Icon with visibility hidden
        <i className='tabler-bike invisible' />
      </Typography>

      <Typography variant='h5' className='mbs-4'>
        Icons from different icon libraries
      </Typography>
      <i className='bx-basket' />
      <i className='bi-airplane-engines' />
      <i className='ri-anchor-line' />
      <i className='uit-adobe-alt' />
      <i className='fa6-regular-comment' />
      <i className='twemoji-auto-rickshaw' />
    </>
  )
}

export default IconsTest
