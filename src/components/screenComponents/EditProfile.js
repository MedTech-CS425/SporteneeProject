import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#2F2F2F',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35, color: 'white'}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#E0E340'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text
          style={{
            color: '#E0E340',
          }}>
          Change profile photo
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              opacity: 0.5,
              color: 'white',
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'white',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
              color: 'white',
            }}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'white',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Website"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'white',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'white',
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#E0E340',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: 'white',
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#E0E340',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: 'white',
          }}>
          Persnol information setting
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;