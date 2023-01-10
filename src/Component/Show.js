import React from 'react'
import Card from '@mui/material/Card';
import moment from 'moment';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from '@mui/material';

const Show = ({data}) => {

    let StartDate = moment(new Date(data.start_time)).format("YYYY-MM-DD hh:mm A"); // 12H clock (AM/PM)
    let EndDate = moment(new Date(data.end_time)).format("YYYY-MM-DD hh:mm A"); // 12H clock (AM/PM)


    return (
        <>
            <Card sx={{ width:500, height:500, m: 5 , p:5}}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Start Date :{StartDate}
                    </Typography> <Typography gutterBottom variant="h5" component="div">
                        End Date: {EndDate}
                    </Typography> <Typography gutterBottom variant="h5" component="div">
                        Duration : {data.duration}
                    </Typography>
                    <Box sx={{ display: 'flex' , justifyContent:"space-around",mt:12}}>
                    <Typography gutterBottom variant="h5" component="div">
                    Website
                </Typography> <Typography gutterBottom variant="h5" component="div">
                Status
            </Typography>
            </Box>

                </CardContent>
                <Box sx={{ display: 'flex' , justifyContent:"space-around"}}>
                <Link href="img">{data.site}</Link>
            
                    <Typography size="small">Coding</Typography>
                
                </Box>

            </Card>

        </>
    )
}

export default Show