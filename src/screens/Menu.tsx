import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utilis/colors'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Menu = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.wrapper]}>
      <Image source={require('../assets/images/detail_top.png')} style={[styles.bgStyle]}/> 
      <View style={[styles.header]}>
        <FontAwesome6
          name={'chevron-left'}
          size={25}
          color={colors.white}
        />
        <FontAwesome6
          name={'cart-shopping'}
          size={20}
          color={colors.white}
        />
      </View>
      <Image source={require('../assets/images/favorites_btn.png')} style={[styles.fav]}/>       
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.contentWrapper]}>
      <Text style={styles.title}>Tandoori Chicken Pizza</Text> 
      <View style={[styles.detailsWrapper]}>
        <View> 
          <View style={[styles.star]} >
            <AntDesign
              name={'star'}
              size={20}
              style={{marginRight:2}}
              color={colors.orange}
            />
            <AntDesign
              name={'star'}
              size={20}
              style={{marginHorizontal:2}}
              color={colors.orange}
            /> 
            <AntDesign
              name={'star'}
              size={20}
              style={{marginHorizontal:2}}
              color={colors.orange}
            /> 
            <AntDesign
              name={'star'}
              size={20}
              style={{marginHorizontal:2}}
              color={colors.orange}
            />
            <AntDesign
              name={'staro'}
              size={20}
              style={{marginHorizontal:2}}
              color={colors.orange}
            />
          </View>
          <Text style={[styles.rating]}>4 Star Ratings</Text>
        </View>
        <View>
        <Text style={[styles.price]}>Rs . 750</Text>
        <Text style={[styles.perPortion]}>/ per Portion</Text>
       </View>
      </View>
      <Text style={[styles.desc]}>Description</Text>
      <Text style={[styles.descText]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's text of the printing and typesetting industry </Text>
      <View style={[styles.lineBreak]}></View>
      <View>
        <Text style={[styles.qtyLabel]}>Customize your Order</Text>
        <View style={[styles.dropdown]}>
          <Text style={{color:colors.black}}>- Select the size of portion -</Text>
          <FontAwesome6
            name={'chevron-down'}
            size={20}
            color={colors.grey}
          />
        </View>
        <View style={[styles.dropdown]}>
          <Text style={{color:colors.black}}>- Select the ingredients - </Text>
          <FontAwesome6
            name={'chevron-down'}
            size={20}
            color={colors.grey}
          />
        </View>
        <View  style={[styles.qtyWrapper]}>
          <Text style={[styles.qtyLabel]}>Number of Portions</Text>
         <View style={[styles.qty]}>
          <Pressable style={[styles.loginBtn]}>
            <Text style={[styles.loginText]}>-</Text>
          </Pressable>
          <Pressable style={[styles.signUpBtn]}>
              <Text style={[styles.signUpText]}>2</Text>
          </Pressable>
          <Pressable style={[styles.loginBtn]}>
            <Text style={[styles.loginText]}>+</Text>
          </Pressable>
          </View>
        </View>
        <View style={[styles.cartRow]}>
          <View style={[styles.orangeBox]}></View>
          <View style={[styles.addtoCartWrapper,styles.shawdow]}>
            <Text style={[styles.totalPrice]}>Total Price</Text>
            <Text style={[styles.coupon]}>LKR 1500</Text>
            <Pressable style={[styles.addToCart]}>
              <Image style={{width:25,height:20}} source={require('../assets/images/shopping_add.png')}/>
              <Text style={[styles.loginText,{marginLeft:5}]}>Add to cart</Text>
            </Pressable>
          </View>
          <View style={[styles.cart,styles.shawdow]}>
            <FontAwesome6
              name={'cart-shopping'}
              size={20}
              color={colors.orange}
            />
          </View>
        </View>
      </View>
    </ScrollView>
    </ScrollView>
  )
}

export default Menu

const styles = StyleSheet.create({
  wrapper:{flex:1,marginBottom:20,backgroundColor:colors.white,},
  fav:{height:65,width:65, top:'-10%',right:-Dimensions.get('screen').width+80,zIndex:1000},
  header:{  bottom:'88%',right:0,zIndex:1000,flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:Dimensions.get('screen').width,paddingHorizontal:25},
  contentWrapper:{backgroundColor:colors.white,flex:1 ,padding:20,paddingTop:25,borderTopRightRadius:45,borderTopLeftRadius:45,marginTop:'-35%',zIndex:999,marginBottom:100,},
  title:{fontSize:18,fontWeight:'900',color:colors.black,letterSpacing:0.6},
  detailsWrapper:{flexDirection:'row',justifyContent:'space-between',marginVertical:7},
  bgStyle:{height:Dimensions.get('screen').height/2.25,width:Dimensions.get('screen').width,resizeMode:'cover',backgroundColor: 'rgba(0,0,0,.6)'},
  loginBtn:{backgroundColor:colors.orange,height:30,alignItems:'center',justifyContent:'center',marginHorizontal:4,width:50,paddingHorizontal:4,borderRadius:50,marginTop:0},
  loginText:{fontWeight:'800',textAlign:'center',color:colors.white,fontSize:18},
  signUpBtn:{backgroundColor:colors.white,height:30,alignItems:'center',justifyContent:'center',marginHorizontal:4,width:50,paddingHorizontal:4,borderRadius:50,marginTop:0,borderColor:colors.orange,borderWidth:1.5},
  signUpText:{fontWeight:'800',textAlign:'center',color:colors.orange,fontSize:16},
  shawdow: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 8,
    shadowColor: colors.black,
  },
  cart:{width:50,height:50,backgroundColor:colors.white,borderRadius:50,elevation:1,marginLeft:-25,alignItems:'center',justifyContent:'center' },
  addToCart:{flexDirection:'row',backgroundColor:colors.orange,height:35,alignItems:'center',justifyContent:'center',marginHorizontal:4,width:175, borderRadius:50,marginTop:0},
  coupon: {color:colors.black,fontWeight:'900',fontSize:18,marginVertical:4,letterSpacing:0.6},
  totalPrice:{color:colors.black,fontWeight:'500',fontSize:13,marginTop:5},
  addtoCartWrapper:{alignItems:'center',justifyContent:'center',width:Dimensions.get('screen').width-140,height:120,backgroundColor:colors.white,borderTopLeftRadius:35,borderBottomLeftRadius:35,marginLeft:-40,borderTopRightRadius:10,borderBottomRightRadius:10},
  orangeBox:{width:100,height:160,backgroundColor:colors.orange,borderTopRightRadius:50,borderBottomRightRadius:50},
  qty:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  qtyLabel:{color:colors.black,fontWeight:'800',fontSize:14,marginVertical:10},
  qtyWrapper:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10},
  cartRow:{flexDirection:'row',alignItems:'center'},
  dropdown:{flexDirection:'row',justifyContent:'space-between',backgroundColor:colors.white_2,borderRadius:4,paddingVertical:12,paddingLeft:25,paddingRight:10,marginVertical:10},
  lineBreak:{width:'100%',height:0.4,backgroundColor:colors.black,marginTop:10},
  descText:{color:colors.black,fontWeight:'400',fontSize:12.5,opacity:0.6},
  desc:{color:colors.black,fontWeight:'800',fontSize:14},
  perPortion: {color:colors.black,fontWeight:'500',fontSize:12,textAlign:'right'},
  price:{fontSize:25,fontWeight:'900',color:colors.black,letterSpacing:0.5},
  rating:{color:colors.orange,fontWeight:'500',fontSize:12},
  star:{flexDirection:'row',justifyContent:'space-evenly'},
})