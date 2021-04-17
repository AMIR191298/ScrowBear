import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import{
    Link
} from "react-router-dom";
function Header(){
    return(
        <Container>
          <HeaderLogo>
            <Link to ="/">
                <img src={"https://i.imgur.com/7I9Was5.png"}/>
            </Link>
          </HeaderLogo>

          <HeaderOptionAddress>
              <LocationOnIcon />
            <HeaderOption>
                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Select Your Address</OptionLineTwo>  
            </HeaderOption>
          </HeaderOptionAddress>  
          <HeaderSearch>
              <HeaderSearchInput type='text'/>

            <HeaderSearchIconContainer>
                <SearchIcon />
            </HeaderSearchIconContainer>
          </HeaderSearch>
          <HeaderNavItems>
              <HeaderOption>
              <OptionLineOne>Hello, Amir</OptionLineOne>
              <OptionLineTwo>Account & Lists</OptionLineTwo>
              </HeaderOption>
              <HeaderOption>
              <OptionLineOne>Returns</OptionLineOne>
              <OptionLineTwo>& Orders</OptionLineTwo>
              </HeaderOption>

                <CartIcon>
            <Link to="/cart">
                <ShoppingCartIcon />
                <OptionLineTwo>5</OptionLineTwo>
            </Link>
              </CartIcon>
            
              
          </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
height: 60px;
background-color: #0f1111;
display: flex;
align-items: center;
color:white;
justify-content: space-between;
`

const HeaderLogo = styled.div`
    img{
        width:100px;
        margin:11px;
    }
`

const HeaderOptionAddress = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left 10px;
    margin-right:10px;
`
const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
    font-weight:700;
`
const HeaderSearch = styled.div`
display:flex;
flex-grow: 1;
height:35px;
border-radius: 4px;
background-color: white;
:focus-within{
    box-shadow: 0 0 0 3px #F90;
}
`
const HeaderSearchInput = styled.input`
flex-grow: 1;
border: 0;
:focus{
    outline: none;
}
border-radius: 6px 0px 0px 6px;
`
const HeaderSearchIconContainer = styled.div`
background-color: #fedb69;
    width: 45px;
    display:flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 0px 6px 6px 0px;
`
const HeaderNavItems = styled.div`
    display:flex;
    align-items: center;
`
const HeaderOption = styled.div`
     padding: 10px 9px 9px 10px;
`
const CartIcon = styled.div`
    display: flex;
    align-item: center;
    margin: 10px 10px;
    a{
        display: flex;
        color:white;
        text-decoration: none;
    }
`