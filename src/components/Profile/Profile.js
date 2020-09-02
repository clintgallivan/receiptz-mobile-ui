import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SectionList
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Svg, { Path, Circle,  Text as SVGText } from "react-native-svg";

import ListButton from '../common/ListButton';
import Button from '../common/Button';
import styles from './styles';

import strings from 'localization';
import getData from 'selectors/DataSelectors';
import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';
import TextStyles from 'helpers/TextStyles';
import { logout } from 'actions/UserActions';
import getUser from 'selectors/UserSelectors';


function Profile(props) {
  const user = useSelector(state => getUser(state));
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(logout()), [dispatch]);



//TODO find out how to remove user w/out throwing error
  let cardData = user ? user.cards.map(({bankName, lastFourDigits}, id) => {
    return {id, info: [bankName, lastFourDigits]}
  }) : [{id: 0, info: ["", 0]}]
  let sections = [
    {
      id: 0,
      title: "Account Information",
      data: [
        {id: cardData.length + 0, info: ['Email', user ? user.metadata.email : ""]},
        {id: cardData.length + 1, info: ['Password', '**********']},
        {id: cardData.length + 2, info: ['Phone Number', user ? user.metadata.phoneNumber : ""]}
      ]
    },
    {
      id: 1,
      title: "Card Information",
      data: cardData
    }

  ]

  const extractKey = ({id}) => id
  const deriveSqrProfImg = (d) => {
    const r = d / 2
    const a =  Math.PI/4
    const opp = (r) * Math.sin(a)
    const cPlus = r + opp
    const rPlus = r - opp
    const lLength = rPlus * .40
    return {
      d,
      a,
      r,
      cPlus,
      rPlus,
      lPlus: cPlus + rPlus * .60,
      dV: `M${cPlus} ${cPlus - lLength} V${cPlus + lLength}`,
      dH: `M${cPlus - lLength} ${cPlus} H${cPlus + lLength}`,
      fontSize: 43
    }
  }
  const sqrProfImg = deriveSqrProfImg(132)
  const _renderItem = ({item}) => {
    return (
      <ListButton
        headerPrimary={item.info[0]}
        headerSecondary={item.info[1]}
        linkDescription={'Edit'}
      />

    )
  }

  const _renderSectionHeader = ({section}) => {
    return (
      <View style={styles.dataHeaders}>
        <Text style={TextStyles.textField}>
          {section.title}
        </Text>
      </View>
    )
  }
  useEffect(() => {
    if (user === null) {
      props.navigation.navigate('Auth');
    }
  });

  return (
    <View style={styles.container}>


      <View style={styles.profileHeader}>          
      <Svg viewBox={`-0 -0 ${sqrProfImg.d} ${sqrProfImg.d}`} width={sqrProfImg.d} height={sqrProfImg.d}>
          <Circle
            fill={Colors.gray} //"rgba(216,216,216,1)"
            fillOpacity={1}
            cx={sqrProfImg.r}
            cy={sqrProfImg.r}
            r={sqrProfImg.r}
          />
          <SVGText 
            fill={Colors.white}
            fontSize= {sqrProfImg.fontSize}
            x={sqrProfImg.r}
            y={sqrProfImg.r + sqrProfImg.fontSize/3}
            textAnchor="middle"
          >{user ? `${user.metadata.name.first.charAt(0)}${user.metadata.name.last.charAt(0)}` : ""}
          </SVGText>
          <Circle
            onPress={() => console.log('butoto pressed')}
            fill={Colors.secondary} //todo change colors based on click
            fillOpacity={1}
            cx={sqrProfImg.cPlus}
            cy={sqrProfImg.cPlus}
            r={sqrProfImg.rPlus}
          />
          <Path
            strokeWidth={2}
            fill="transparent"
            stroke={Colors.white}
            fillOpacity={1}
            strokeOpacity={1}
            d={sqrProfImg.dV}
          ></Path>
          <Path
            strokeWidth={2}
            fill="transparent"
            stroke={Colors.white}
            fillOpacity={1}
            strokeOpacity={1}
            d={sqrProfImg.dH}
          ></Path>


          </Svg>

      </View>

      <View style={styles.displayName}>
        <Text style={styles.userName}>
          {user ? `${user.metadata.name.first} ${user.metadata.name.last}` : ""}
        </Text>
        <View style={styles.displayName}>
          <TouchableOpacity onPress={logoutUser}>
            <Text style={styles.logout}>
              {strings.logout}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SectionList
        sections={sections}
        renderItem={_renderItem}
        renderSectionHeader={_renderSectionHeader}
        keyExtractor={extractKey}
      />
    </View>
  );
}

// Profile.navigationOptions = {
//   title: strings.profile,
// };
Profile.navigationOptions = {
  title: strings.settings,
  headerTitleStyle: {
    color: Colors.white
  },
  headerStyle: HeaderStyles.appHeader
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Profile;
