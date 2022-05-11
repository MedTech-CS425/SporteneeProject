import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { FriendsProfileData } from '../screenComponents/Database'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import {useNavigation} from 'react-navigation'


const Activity = () => {

  
  
  
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#2F2F2F', }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomWidth: 0.5,
          borderBottomColor: '#DEDEDE',
          padding: 10,
          color: 'white',
          alignItems: 'center',
        }}>
          My Network
        </Text>
        <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
           <Text style={{fontWeight: 'bold', color: 'white'}}>
             This Week
           </Text>
           <View style={{flexDirection:'row', paddingVertical: 10}}>
             {
               FriendsProfileData.slice(0,1).map((data, index) =>{
                 return(
                   
                   <TouchableOpacity  key={index}>
                     <Text  style={{color: 'white'}}>
                       
                       {data.name}

                     </Text>
                   </TouchableOpacity>
                 )
               })
             }
             <Text style={{color: 'white'}}>Started following you</Text>
           </View>
           <Text style={{fontWeight: 'bold', color: 'white'}}>Earlier</Text>
           {
             FriendsProfileData.slice(3,6).map((data,index) =>{
               const [follow, setFollow] = useState(data.follow)
               return(
                 <View key={index} style={{width:'100%'}}>
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingVertical: 20,
                      width: '100%'
                    }}>
                      <TouchableOpacity style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        maxWidth: '64%'}}>
                        <Image source={data.profileImage} style={{
                        width: 45,
                        height: 45,
                        borderRadius: 100, 
                        marginRight: 10,}}/>
                        <Text style={{fontSize: 15, color: 'white'}}>
                         <Text style={{fontWeight: 'bold'}}>{data.name}</Text>
                          Who you might know is now on Sportenee !
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                      onPress={() =>setFollow(!follow)} 
                      style={{width:follow ? 72 : 68}}>
                        <View style={{
                          width: '100%',
                          height:30,
                          borderRadius: 5,
                          backgroundColor: follow? null : '#E0E340',
                          borderWidth: follow? 1 : 0,
                          borderColor: follow ? '#E0E340' : null,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>
                          <Text style={{color:follow ? 'white' : null}}>
                            {follow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                 </View>
               )
             })
           }
           <Text style={{fontWeight: 'bold', paddingVertical: 10 ,color:'white'}}>
             Profiles Suggestions for you ! 
           </Text>
           {
             FriendsProfileData.slice(6.12).map((data, index) => {
               const [follow, setFollow] = useState(data.follow)
               const [close, setClose] = useState(false)
               return (
                 <View key={index}>
                 {
                   close ? null :
                   (
                 <View  style={{paddingVertical: 10, flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                  <View>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', maxWidth: '64%'}}>
                      <Image source={data.profileImage} style={{
                        width: 45, 
                        height: 45, 
                        borderRadius: 100 ,
                        marginRight: 10,}}
                        />
                        <View style={{width:'100%'}}>
                          <Text style={{fontSize:14, fontWeight: 'bold',color: 'white'}}>
                            {data.name}
                          </Text>
                          <Text style={{fontSize: 12, opacity: 0.5, color:'white'}}>
                            {data.accountName}
                          </Text>
                          <Text style={{fontSize: 12, opacity: 0.5, color:'white'}}>
                            Suggested for you !
                          </Text>
                        </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {
                          follow ? (
                            <TouchableOpacity onPress={() => setFollow (!follow)} style={{
                              width: follow ? 90 : 68,
                            }}>
                              <View style={{
                                width: '100%',
                                height: 30,
                                borderRadius: 5,
                                backgroundColor: follow? 'white' : "#2F2F2F",
                                borderWidth: follow ? 1 : 0,
                                borderColor: '#DEDEDE',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                                <Text style={{color: follow ? "black" : "white"}}>
                                  {follow ? 'following' : 'follow'}
                                </Text>
                              </View>
                            </TouchableOpacity>
                          ) : (
                            <>
                              <TouchableOpacity onPress={() => setFollow (!follow)} style={{
                              width: follow ? 90 : 68,
                            }}>
                                <View style={{
                                width: '100%',
                                height: 30,
                                borderRadius: 5,
                                backgroundColor: follow? 'white' : "#E0E340",
                                borderWidth: follow ? 1 : 0,
                                borderColor: '#DEDEDE',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                                  <Text style={{color: follow ? "black" : "black"}}>
                                    {follow? "Following" : "Follow"}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => setClose (true)} style={{paddingHorizontal: 10}}>
                                  <AntDesign name='close' style={{fontSize: 14, color: '#E0E340', opacity: 0.8}}/>
                              </TouchableOpacity>
                            </>
                          )
                        }
                  </View>
                  </View>
                  )
                 }
                 </View>
               )
             })
           }
        </ScrollView>
    </View>
  )
}

export default Activity
