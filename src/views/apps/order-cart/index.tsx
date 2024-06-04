'use client'

// React Imports
import { useState } from 'react'

import { Product } from './productsData';

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MuiStepper from '@mui/material/Stepper'
import styled from '@mui/material/styles/styled'
import type { StepperProps } from '@mui/material/Stepper'

// Component Imports
import StepOrder from './StepOrder'
import StepCart from './StepCart'
import StepAddress from './StepAddress'
import StepPayment from './StepPayment'
import StepConfirmation from './StepConfirmation'
import DirectionalIcon from '@components/DirectionalIcon'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'


// Vars
const steps = [
  {
    title: 'Order',
    icon: (
      <svg width="60" height="60" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z" fill="" />
        <path d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z" fill="" />
        <path d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z" fill="" />
      </svg>
    )
  },
  {
    title: 'Cart',
    icon: (
      <svg id='wizardCart' xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'>
        <path d='M60 41.6949V15.2542H50.8475C50.2851 15.2542 49.8305 15.7088 49.8305 16.2712C49.8305 16.8336 50.2851 17.2881 50.8475 17.2881H57.9661V39.661H11.1864V17.2881H18.3051C18.8675 17.2881 19.322 16.8336 19.322 16.2712C19.322 15.7088 18.8675 15.2542 18.3051 15.2542H11.1864V7.11864C11.1864 6.55627 10.7319 6.10169 10.1695 6.10169H7.99119C7.53661 4.35254 5.95831 3.05084 4.0678 3.05084C1.82441 3.05084 0 4.87525 0 7.11864C0 9.36203 1.82441 11.1864 4.0678 11.1864C5.95831 11.1864 7.53661 9.88474 7.99119 8.13559H9.15254V15.2542V16.2712V40.678V41.6949V47.7966C9.15254 48.359 9.60712 48.8136 10.1695 48.8136H17.3197C16.0739 49.741 15.2542 51.2125 15.2542 52.8814C15.2542 55.6851 17.5353 57.9661 20.339 57.9661C23.1427 57.9661 25.4237 55.6851 25.4237 52.8814C25.4237 51.2125 24.6041 49.741 23.3583 48.8136H41.7264C40.4807 49.741 39.661 51.2125 39.661 52.8814C39.661 55.6851 41.942 57.9661 44.7458 57.9661C47.5495 57.9661 49.8305 55.6851 49.8305 52.8814C49.8305 51.2125 49.0108 49.741 47.7651 48.8136H53.8983C54.4607 48.8136 54.9153 48.359 54.9153 47.7966C54.9153 47.2342 54.4607 46.7797 53.8983 46.7797H11.1864V41.6949H60ZM4.0678 9.15254C2.9461 9.15254 2.0339 8.24033 2.0339 7.11864C2.0339 5.99694 2.9461 5.08474 4.0678 5.08474C4.81729 5.08474 5.4661 5.4966 5.81898 6.10169H5.08475C4.52237 6.10169 4.0678 6.55627 4.0678 7.11864C4.0678 7.68101 4.52237 8.13559 5.08475 8.13559H5.81898C5.4661 8.74067 4.81729 9.15254 4.0678 9.15254ZM20.339 55.9322C18.6569 55.9322 17.2881 54.5634 17.2881 52.8814C17.2881 51.1993 18.6569 49.8305 20.339 49.8305C22.021 49.8305 23.3898 51.1993 23.3898 52.8814C23.3898 54.5634 22.021 55.9322 20.339 55.9322ZM44.7458 55.9322C43.0637 55.9322 41.6949 54.5634 41.6949 52.8814C41.6949 51.1993 43.0637 49.8305 44.7458 49.8305C46.4278 49.8305 47.7966 51.1993 47.7966 52.8814C47.7966 54.5634 46.4278 55.9322 44.7458 55.9322Z' />
        <path d='M34.5762 30.5085C42.427 30.5085 48.8134 24.122 48.8134 16.2712C48.8134 8.42035 42.427 2.03391 34.5762 2.03391C26.7253 2.03391 20.3389 8.42035 20.3389 16.2712C20.3389 24.122 26.7253 30.5085 34.5762 30.5085ZM34.5762 4.0678C41.3053 4.0678 46.7795 9.54204 46.7795 16.2712C46.7795 23.0003 41.3053 28.4746 34.5762 28.4746C27.847 28.4746 22.3728 23.0003 22.3728 16.2712C22.3728 9.54204 27.847 4.0678 34.5762 4.0678Z' />
        <path d='M32.9074 22.138C32.9735 22.1919 33.0478 22.2244 33.122 22.26C33.1525 22.2753 33.18 22.2997 33.2115 22.3109C33.3234 22.3515 33.4413 22.3729 33.5583 22.3729C33.7007 22.3729 33.843 22.3414 33.9742 22.2824C34.0241 22.26 34.0617 22.2153 34.1085 22.1848C34.1807 22.137 34.2579 22.0993 34.3179 22.0312L34.3373 22.0088C34.3373 22.0088 34.3383 22.0078 34.3393 22.0078C34.3393 22.0078 34.3403 22.0068 34.3403 22.0058L42.4525 12.8787C42.8257 12.4597 42.7881 11.8159 42.3681 11.4437C41.9481 11.0695 41.3054 11.1071 40.9332 11.5282L33.4525 19.9444L28.1074 15.4902C27.6732 15.1312 27.0346 15.1892 26.6746 15.6204C26.3146 16.0526 26.3735 16.6943 26.8047 17.0532L32.9074 22.138Z' />
      </svg>
    )
  },
  // {
  //   title: 'Address',
  //   icon: (
  //     <svg id='wizardCheckoutAddress' xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'>
  //       <g>
  //         <path d='M60 8V0H0V8H2V48H1C0.448 48 0 48.447 0 49C0 49.553 0.448 50 1 50H2H29V52C29 52.047 29.021 52.088 29.027 52.134C27.293 52.571 26 54.131 26 56C26 58.206 27.794 60 30 60C32.206 60 34 58.206 34 56C34 54.131 32.707 52.571 30.973 52.134C30.979 52.088 31 52.047 31 52V50H58H59C59.552 50 60 49.553 60 49C60 48.447 59.552 48 59 48H58V8H60ZM32 56C32 57.103 31.103 58 30 58C28.897 58 28 57.103 28 56C28 54.897 28.897 54 30 54C31.103 54 32 54.897 32 56ZM2 2H58V6H2V2ZM56 48H4V8H56V48Z' />
  //         <path d='M50 41H35C34.448 41 34 41.447 34 42C34 42.553 34.448 43 35 43H50C50.552 43 51 42.553 51 42C51 41.447 50.552 41 50 41Z' />
  //         <path d='M10 36H20C20.552 36 21 35.553 21 35C21 34.447 20.552 34 20 34H10C9.448 34 9 34.447 9 35C9 35.553 9.448 36 10 36Z' />
  //         <path d='M30 36H45C45.552 36 46 35.553 46 35C46 34.447 45.552 34 45 34H30C29.448 34 29 34.447 29 35C29 35.553 29.448 36 30 36Z' />
  //         <path d='M24.29 34.29C24.11 34.479 24 34.729 24 35C24 35.26 24.11 35.52 24.29 35.71C24.48 35.89 24.74 36 25 36C25.26 36 25.52 35.89 25.71 35.71C25.89 35.52 26 35.26 26 35C26 34.74 25.89 34.479 25.71 34.29C25.34 33.92 24.66 33.92 24.29 34.29Z' />
  //         <path d='M30 41H15C14.448 41 14 41.447 14 42C14 42.553 14.448 43 15 43H30C30.552 43 31 42.553 31 42C31 41.447 30.552 41 30 41Z' />
  //         <path d='M10 43C10.26 43 10.52 42.89 10.71 42.71C10.89 42.52 11 42.26 11 42C11 41.74 10.89 41.479 10.71 41.3C10.34 40.92 9.67 40.92 9.29 41.29C9.11 41.479 9 41.74 9 42C9 42.26 9.11 42.52 9.29 42.71C9.48 42.89 9.74 43 10 43Z' />
  //         <path d='M49.29 34.29C49.11 34.479 49 34.729 49 35C49 35.26 49.11 35.52 49.29 35.71C49.48 35.89 49.74 36 50 36C50.26 36 50.52 35.89 50.71 35.71C50.89 35.52 51 35.26 51 35C51 34.74 50.89 34.479 50.71 34.29C50.34 33.92 49.67 33.92 49.29 34.29Z' />
  //         <path d='M50 20H35C34.448 20 34 20.447 34 21C34 21.553 34.448 22 35 22H50C50.552 22 51 21.553 51 21C51 20.447 50.552 20 50 20Z' />
  //         <path d='M50 27H40C39.448 27 39 27.447 39 28C39 28.553 39.448 29 40 29H50C50.552 29 51 28.553 51 28C51 27.447 50.552 27 50 27Z' />
  //         <path d='M30 29H32C32.552 29 33 28.553 33 28C33 27.447 32.552 27 32 27H30C29.448 27 29 27.447 29 28C29 28.553 29.448 29 30 29Z' />
  //         <path d='M30 15H45C45.552 15 46 14.553 46 14C46 13.447 45.552 13 45 13H30C29.448 13 29 13.447 29 14C29 14.553 29.448 15 30 15Z' />
  //         <path d='M50 15C50.26 15 50.52 14.89 50.71 14.71C50.9 14.52 51 14.26 51 14C51 13.74 50.9 13.479 50.71 13.29C50.33 12.92 49.66 12.92 49.29 13.29C49.11 13.479 49 13.74 49 14C49 14.26 49.11 14.52 49.29 14.71C49.48 14.89 49.74 15 50 15Z' />
  //         <path d='M30.29 20.29C30.11 20.479 30 20.729 30 21C30 21.26 30.11 21.52 30.29 21.71C30.48 21.89 30.74 22 31 22C31.26 22 31.52 21.89 31.71 21.71C31.89 21.52 32 21.26 32 21C32 20.729 31.89 20.479 31.71 20.29C31.33 19.92 30.67 19.92 30.29 20.29Z' />
  //         <path d='M35.29 27.29C35.11 27.479 35 27.74 35 28C35 28.26 35.11 28.52 35.29 28.71C35.48 28.89 35.74 29 36 29C36.26 29 36.52 28.89 36.71 28.71C36.89 28.52 37 28.26 37 28C37 27.74 36.89 27.479 36.71 27.29C36.34 26.92 35.66 26.92 35.29 27.29Z' />
  //         <path d='M25 13H9V29H25V13ZM23 27H11V15H23V27Z' />
  //       </g>
  //       <defs>
  //         <clipPath id='clip0_7904_84890'>
  //           <rect width='60' height='60' />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   )
  // },
  // {
  //   title: 'Payment',
  //   icon: (
  //     <svg id='wizardPayment' xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'>
  //       <g>
  //         <path d='M9 26H17V16H9V26ZM11 18H15V24H11V18Z' />
  //         <path d='M9 38H17V28H9V38ZM11 30H15V36H11V30Z' />
  //         <path d='M9 50H17V40H9V50ZM11 42H15V48H11V42Z' />
  //         <path d='M36 25C35.447 25 35 25.447 35 26V35C35 35.553 35.447 36 36 36C36.553 36 37 35.553 37 35V26C37 25.447 36.553 25 36 25Z' />
  //         <path d='M36 38C35.447 38 35 38.447 35 39V48C35 48.553 35.447 49 36 49C36.553 49 37 48.553 37 48V39C37 38.447 36.553 38 36 38Z' />
  //         <path d='M31 25C30.447 25 30 25.447 30 26V27C30 27.553 30.447 28 31 28C31.553 28 32 27.553 32 27V26C32 25.447 31.553 25 31 25Z' />
  //         <path d='M31 30C30.447 30 30 30.447 30 31V33C30 33.553 30.447 34 31 34C31.553 34 32 33.553 32 33V31C32 30.447 31.553 30 31 30Z' />
  //         <path d='M31 36C30.447 36 30 36.447 30 37V38C30 38.553 30.447 39 31 39C31.553 39 32 38.553 32 38V37C32 36.447 31.553 36 31 36Z' />
  //         <path d='M31 41C30.447 41 30 41.447 30 42V44C30 44.553 30.447 45 31 45C31.553 45 32 44.553 32 44V42C32 41.447 31.553 41 31 41Z' />
  //         <path d='M30.29 47.29C30.109 47.479 30 47.74 30 48C30 48.27 30.109 48.52 30.29 48.71C30.479 48.89 30.74 49 31 49C31.26 49 31.52 48.89 31.71 48.71C31.89 48.52 32 48.27 32 48C32 47.74 31.89 47.479 31.71 47.29C31.33 46.92 30.68 46.91 30.29 47.29Z' />
  //         <path d='M48 2H0V9H3V53.783C3 56.108 4.892 58 7.217 58H40.783C43.108 58 45 56.108 45 53.783V9H48V2ZM43 53.783C43 55.006 42.006 56 40.783 56H7.217C5.994 56 5 55.006 5 53.783V7H9V14H17V7H26V11.255V12.745V18.745C26 19.988 27.012 21 28.255 21H36.255H37.745C38.988 21 40 19.988 40 18.745V11.255V7H43V53.783ZM11 7H15V12H11V7ZM34 7V9H32V7H34ZM38 7V9.026C37.915 9.016 37.832 9 37.745 9H36V7H38ZM28.255 19C28.114 19 28 18.886 28 18.745V14.974C28.085 14.984 28.168 15 28.255 15H30V19H28.255ZM32 15H33.745C33.886 15 34 15.114 34 15.255V18.745C34 18.832 34.016 18.915 34.026 19H32V15ZM36 18.745V15.255C36 14.012 34.988 13 33.745 13H28.255C28.114 13 28 12.886 28 12.745V11.255C28 11.114 28.114 11 28.255 11H37.745C37.886 11 38 11.114 38 11.255V18.745C38 18.886 37.886 19 37.745 19H36.255C36.114 19 36 18.886 36 18.745ZM30 9H28.255C28.168 9 28.085 9.016 28 9.026V7H30V9ZM46 7H45V5H40H26H17H9H3V7H2V4H46V7Z' />
  //         <path d='M59.707 34.293L53.708 28.294C53.616 28.201 53.505 28.128 53.382 28.077C53.138 27.976 52.863 27.976 52.618 28.077C52.495 28.128 52.384 28.202 52.292 28.294L46.293 34.293C45.902 34.684 45.902 35.316 46.293 35.707C46.488 35.902 46.744 36 47 36C47.256 36 47.512 35.902 47.707 35.707L52 31.414V57C52 57.553 52.447 58 53 58C53.553 58 54 57.553 54 57V31.414L58.293 35.707C58.488 35.902 58.744 36 59 36C59.256 36 59.512 35.902 59.707 35.707C60.098 35.316 60.098 34.684 59.707 34.293Z' />
  //       </g>
  //       <defs>
  //         <clipPath id='clip0_7904_84912'>
  //           <rect width='60' height='60' />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   )
  // },
  {
    title: 'Confirmation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 305.002 305.002">
        <g>
          <g>
            <path d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5
              S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5
              c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"/>
            <path d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678
              l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385
              c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"/>
          </g>
        </g>
      </svg>
    )
  }
]

// Styled Components
const Stepper = styled(MuiStepper)<StepperProps>(({ theme }) => ({
  justifyContent: 'center',
  '& .MuiStep-root': {
    '& + i': {
      display: 'none',
      color: 'var(--mui-palette-text-secondary) !important'
    },
    '& .MuiStepLabel-label': {
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      paddingBlock: theme.spacing(5),
      svg: {
        marginInline: theme.spacing(1.5),
        fill: 'var(--mui-palette-text-primary)'
      },
      '&.Mui-active, &.Mui-completed': {
        '& .MuiTypography-root': {
          color: 'var(--mui-palette-primary-main)'
        },
        '& svg': {
          fill: 'var(--mui-palette-primary-main)'
        }
      }
    },
    '&.Mui-completed + i': {
      color: 'var(--mui-palette-primary-main) !important'
    },

    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
      '& + svg': {
        display: 'block'
      },
      '& .MuiStepLabel-label': {
        display: 'block'
      }
    }
  }
}))

const getStepContent = (step: number, handleNext: () => void,
  cartItems: Map<Product, number>, updateCartItems: (newCartItems: Map<Product, number>) => void) => {

  switch (step) {
    case 0:
      return <StepOrder handleNext={handleNext} cartItems={cartItems} updateCartItems={updateCartItems} />
    case 1:
      return <StepCart handleNext={handleNext} cartItems={cartItems} updateCartItems={updateCartItems} />
    // case 1:
    //   return <StepAddress handleNext={handleNext} />
    // case 2:
    //   return <StepPayment handleNext={handleNext} />
    case 2:
      return <StepConfirmation />
    default:
      return null
  }
}

const CheckoutWizard = () => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)
  const [cartItems, setCartItems] = useState<Map<Product, number>>(new Map());

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const updateCartItems = (newCartItems: Map<Product, number>) => {
    setCartItems(newCartItems)
  }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper
            activeStep={activeStep}
            connector={
              <DirectionalIcon
                ltrIconClass='tabler-chevron-right'
                rtlIconClass='tabler-chevron-left'
                className='mli-12 hidden md:block text-xl text-textDisabled'
              />
            }
          >
            {steps.map((step, index) => {
              return (
                <Step key={index} onClick={() => {
                  if (index == 2) { // Confirmation step
                    return
                  } else {
                    setActiveStep(index)
                  }
                }}>
                  <StepLabel icon={<></>} className='text-center'>
                    {step.icon}
                    <Typography className='step-title'>{step.title}</Typography>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>
      <Divider />

      <CardContent>{getStepContent(activeStep, handleNext, cartItems, updateCartItems)}</CardContent>
    </Card>
  )
}

export default CheckoutWizard
