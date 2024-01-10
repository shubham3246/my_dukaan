import React from 'react'
import IconButton from '@mui/material/IconButton';
import { FiSearch } from "react-icons/fi";
import { Input } from '@mui/material';
import { BiSortAlt2 } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { Grid } from '@mui/material';
import { GoInfo } from "react-icons/go";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import transactions from '../../../../assets/data/transactions';

const Transactions = () => {
    let pageNumbers = [];
    pageNumbers.push('1');
    pageNumbers.push('...');
    for (let i = 10; i < 20; i++) pageNumbers.push(`${i}`);
    let active = '10';

    return (
        <div className='bg-white rounded p-4'>
            <div className='flex justify-between align-middle'>
                
                <div className='flex items-center rounded-md px-2 border border-black_85'>
                    <IconButton sx={{ p: '10px', fontSize: '20px' }} aria-label="search">
                        <FiSearch color='#999999' />
                    </IconButton>
                    <Input placeholder="Search by order ID..." className='w-full' disableUnderline="true" />
                </div>
                <div className='grid grid-cols-3 gap-x-2'>
                    <div className='border my-1 py-1 px-2  col-span-2 rounded-md hover:bg-black_90'>
                        <div className='flex items-center'>
                            <div className='mx-1 text-black_30 font-semibold'>Sort</div>
                            <BiSortAlt2 fontSize={20} color='#4d4d4d' />
                        </div>
                    </div>
                    <div className='border my-1 py-1 px-2  col-span-1 rounded-md hover:bg-black_90'>
                        <div className='items-center'>
                            <FiDownload fontSize={20} color='#4d4d4d' />
                        </div>
                    </div>
                </div>


            </div>


            <Grid container columns={4} bgcolor={'#F2F2F2'} p={1} borderRadius={2} marginTop={2} className='text-black_30'>
                <Grid item xs>
                    <div className='flex'>Order ID</div>
                </Grid>
                <Grid item xs >
                    <div className='flex items-center justify-center'>
                        <div className='me-1'>Order date</div>
                        <RiArrowDownSFill />
                    </div>
                </Grid>
                <Grid item xs>
                    Order Amount
                </Grid>
                <Grid item xs>
                    <div className='flex items-center justify-end'>
                        <div className='me-1'>Transaction fees</div>
                        <GoInfo />
                    </div>
                </Grid>
            </Grid>

            {
                transactions.map((item) =>

                    <Grid container columns={4} p={1} borderBottom={1} borderColor={'#e6e6e6'}>
                        <Grid item xs>
                            <div className='flex text-pm_blue font-medium'>{item.id}</div>
                        </Grid>
                        <Grid item xs>{item.date}</Grid>
                        <Grid item xs>{item.amount}</Grid>
                        <Grid item xs>
                            <div className='flex justify-end'>{item.fees}</div>
                        </Grid>
                    </Grid>

                )
            }

            <footer className='flex justify-center mt-5'>
                <div className='border my-1 py-1 px-2  col-span-2 rounded-md hover:bg-black_90'>
                    <div className='flex items-center'>
                        <RiArrowLeftSLine fontSize={20} color='#4d4d4d' />
                        <div className='mx-1 text-black_30 font-semibold'>Previus</div>
                    </div>
                </div>
                <div className='grid grid-cols-12 items-center px-4'>
                    {pageNumbers.map((item) => 
                    <div className={`px-2 py-1 mx-2 rounded-md  ${(item === active) ? 'bg-pm_blue text-white': 'hover:bg-black_90'}`}>
                        
                        {item}
                        </div>
                    )}
                </div>
                <div className='border my-1 py-1 px-2  col-span-2 rounded-md hover:bg-black_90'>
                    <div className='flex items-center'>
                        <div className='mx-1 text-black_30 font-semibold'>Next</div>
                        <RiArrowRightSLine fontSize={20} color='#4d4d4d' />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Transactions