
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from './Database';
import SingleEvent from './SingleEvent'


const EventComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleEvent item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default EventComponent;