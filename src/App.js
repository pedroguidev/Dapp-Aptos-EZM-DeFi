import "./App.css";
import React from "react";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import typography from "./typography";
import { OutlinedInput,Box, AppBar,Toolbar,IconButton, Container, Button, Typography } from "@mui/material";
class App extends React.Component {
  constructor(props){
    super(props);
    this.theme = createTheme({typography});
  }
  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <Box>
          <AppBar
            position="static"
            sx={{height:90, backgroundColor: "#241F3E", boxShadow: "0px 5px 4px rgba(138, 146, 163, 0.22)" }}
          >
            <Toolbar
              sx={{
                justifyContent: "space-between",
                px:{md:10, sm:5, xs:1},
                my:"auto"
              }}
            >
              <Box sx={{display:"flex", alignItems:"center"}}>
                <Box component="img" src="logo192.png" sx={{width:50}}/>
                <Box component="p" fontSize="32px" sx={{ml:"10px",display:{xs:"none", sm:"block"}}}>
                  ez finance
                </Box>
              </Box>
              <Box sx={{display:"flex"}}>
                <IconButton color="white" sx={{width:"39px", height:"39px",backgroundColor:"#16162D",boxShadow:"0px 1px 4px rgba(138, 146, 163, 0.22)"}}>
                  <Box component="img" src="vector.png" width="17px"/>
                </IconButton>
                <Box sx={{position:"relative",pl:"20px",ml:2,display:"flex",alignItems:"center",width:"186px", borderRadius:"50px",backgroundColor:"#2e204b"}}>
                  <Box color="white" fontSize="18px">BSC</Box>
                  <Button sx={{textTransform:"none",position:"absolute", right:1,width:"120px", height:"33px", bgcolor:"#16162D", borderRadius:"25px", boxShadow:"0px 1px 4px rgba(138, 146, 163, 0.22)", color:"white", fontFamily:"Outfit", fontSize:"18px"}}>0x81...8a5f</Button>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg">
            <Box sx={{mt:12, borderRadius:"20px", p:{md:10, sm:8, xs:5}, bgcolor:"#16162D", color:"white", boxShadow:"0px 0px 8px #FFFFFF"}}>
              <Typography variant="h2" fontWeight="medium">
                The journey starts here
              </Typography>
              <Typography variant="h5" fontWeight="500" sx={{mt:2}}>
                When you are ready, deposit your ezm
              </Typography>
              <Box
                display="flex"
                rowGap={2}
                columnGap={4}
                flexDirection={{xs:"column", sm:"row"}}
                sx={{mt:7, alignItems:"center"}}
              >
                <Box flex={2} width="100%">
                  <OutlinedInput flex={2} sx={{width:"100%",color:"white",border:"solid 2px white", borderRadius:"15px","& fieldset":{border:"none"}}}/>
                </Box>
                <Box flex={1} sx={{display:{xs:"none", md:"flex"}}}>
                  <Box component="img" src="arrow.png" sx={{ mx:"auto"}} />
                </Box>
                <Box flex={2} width="100%">
                  <OutlinedInput value={"0 MOJO"} flex={2} sx={{width:"100%",color:"white",border:"solid 2px white", borderRadius:"15px","& fieldset":{border:"none"}}}/>
                </Box>
                <Box flex={2} width="100%" textAlign="right">
                  <Button sx={{maxWidth:{md:"300px", xs:"100%"},bgcolor:'#882DC3', borderRadius:"50px", color:"white", width:"100%", height:"64px"}}>Connect wallet</Button>
                </Box>
              </Box>
            </Box>
            <Box sx={{mt:7, borderRadius:"20px", p:{md:10, sm:8, xs:5}, bgcolor:"#16162D", color:"white", boxShadow:"0px 0px 8px #FFFFFF"}}>
              <Box display="flex" flexDirection={{xs:"column", sm:"row"}} rowGap={2} columnGap={4} sx={{alignItems:"center"}}>
                <Box flex={5}>
                  <Typography variant="h2" fontWeight="medium">
                    Your ezm Dashboard
                  </Typography>
                  <Typography variant="h5" fontWeight="500" sx={{mt:2}}>
                    connect your wallet to see dashboard
                  </Typography>
                </Box>
                <Box flex={2} sx={{width:"100%"}}>
                  <Box flex={2} width="100%" textAlign="right">
                    <Button sx={{maxWidth:{md:"300px", xs:"100%"},bgcolor:'#882DC3', borderRadius:"50px", color:"white", width:"100%", height:"64px"}}>Connect wallet</Button>
                  </Box>
                </Box>
              </Box>
              {/* <Box
                display="flex"
                rowGap={2}
                columnGap={4}
                flexDirection={{xs:"column", sm:"row"}}
                sx={{mt:7, alignItems:"center"}}
              >
                <Box flex={5} width="100%">
                  <OutlinedInput flex={2} sx={{maxWidth:{md:"300px", xs:"100%"} , width:"100%",color:"white",border:"solid 2px white", borderRadius:"15px","& fieldset":{border:"none"}}}/>
                </Box>
                <Box flex={2} width="100%"  textAlign="right">
                  <Button sx={{maxWidth:{md:"300px", xs:"100%"},bgcolor:'#882DC3', borderRadius:"50px", color:"white", width:"100%", height:"64px"}}>Claim</Button>
                </Box>
              </Box> */}
            </Box>
            <Box sx={{mt:7, borderRadius:"20px", p:{md:10, sm:8, xs:5}, bgcolor:"#16162D", color:"white", boxShadow:"0px 0px 8px #FFFFFF"}}>
              <Box display="grid" rowGap={3} gridTemplateColumns={{md:"repeat(4, 1fr)", sm:"repeat(2, 1fr)", xs:"repeat(1,1fr)"}}>
                <Box>
                  <Typography variant="h3" fontWeight="medium">
                    00:00:00
                  </Typography>
                  <Typography variant="h5" fontWeight="500" sx={{mt:2}}>
                    General Sale Period Starts
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" fontWeight="medium">
                    00:00:00
                  </Typography>
                  <Typography variant="h5" fontWeight="500" sx={{mt:2}}>
                    Sale Period Ends
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" fontWeight="medium">
                    03:04:20
                  </Typography>
                  <Typography variant="h5" fontWeight="500" sx={{mt:2}}>
                    APT Contributed
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" fontWeight="medium">
                    21,212
                  </Typography>
                  <Typography variant="h5" fontWeight="500" sx={{mt:2}}>
                    ezm Remaing for sales
                  </Typography>
                </Box>
              </Box>
              <Box sx={{mt:4}}>
                <Typography variant="h6">
                The EZ FINANCE operates on a fair launch model, where 100% of the revenue generated is distributed to $EZM token holders. The EZFI team will not retain any portion of the funds raised during the public sale. All funds will be allocated according to the project's established plan and goals
                </Typography>
              </Box>
            </Box>
          </Container>
          <Box sx={{flexDirection:{xs:"column", sm:"row"},px:{md:10, sm:5, xs:1},color:"white",mt:12, display:"flex", justifyContent:{sm:"space-between", xs:"center"}, alignItems:"center", height:90, bgcolor:"#241F3E", boxShadow:"box-shadow: 0px 5px 4px rgba(138, 146, 163, 0.22)"}}>
            <Typography variant="h6">Copyrights 2022 All Rights Reserved</Typography>
            <Box sx={{py:2}}>
              <Box component="a" href="#" sx={{mr:8}}>
                <Box component="img" src="discord.png"/>
              </Box>
              <Box component="a" href="#" sx={{mr:8}}>
                <Box component="img" src="twitter.png"/>
              </Box>
              <Box component="a" href="#">
                <Box component="img" src="telegram.png"/>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default App;
