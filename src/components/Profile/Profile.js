import React, {useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, SectionList} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import Svg, {Path, Circle, Text as SVGText} from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';

import ListButton from '../common/ListButton';
import LoginButton from '../common/LoginButton';
// import SettingItemEdit from '../common/SettingItemEdit';

import styles from './styles';
import strings from 'localization';
import getData from 'selectors/DataSelectors';
import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';
import TextStyles from 'helpers/TextStyles';
import {logout} from 'actions/UserActions';
import getUser from 'selectors/UserSelectors';
import LocalizedStrings from 'react-native-localization';
import navigation from 'components/navigation';

function Profile(props) {
  const user = useSelector(state => getUser(state));
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(logout()), [dispatch]);

  //TODO find out how to remove user w/out throwing error
  let cardData = user
    ? user.cards.map(({bankName, lastFourDigits}, id) => {
        return {id, info: [bankName, lastFourDigits]};
      })
    : [{id: 0, info: ['', 0]}];
  let sections = [
    {
      id: 0,
      title: 'Card Information',
      data: cardData,
    },
    {
      id: 1,
      title: 'Account Information',
      data: [
        {
          id: cardData.length + 0,
          info: ['Email', user ? user.metadata.email : ''],
        },
        {id: cardData.length + 1, info: ['Password', '**********']},
        {
          id: cardData.length + 2,
          info: ['Phone Number', user ? user.metadata.phoneNumber : ''],
        },
      ],
    },
  ];

  const extractKey = ({id}) => id;
  const deriveSqrProfImg = d => {
    const r = d / 2;
    const a = Math.PI / 4;
    const opp = r * Math.sin(a);
    const cPlus = r + opp;
    const rPlus = r - opp;
    const lLength = rPlus * 0.4;
    return {
      d,
      a,
      r,
      cPlus,
      rPlus,
      lPlus: cPlus + rPlus * 0.6,
      dV: `M${cPlus} ${cPlus - lLength} V${cPlus + lLength}`,
      dH: `M${cPlus - lLength} ${cPlus} H${cPlus + lLength}`,
      fontSize: 41,
    };
  };
  const sqrProfImg = deriveSqrProfImg(90);

  const _renderItem = ({item}) => {
    console.log(_renderSectionHeader);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SettingItemEdit');
            console.log(item);
          }}>
          <View style={styles.listButtonContainer}>
            <ListButton
              headerPrimary={item.info[0]}
              headerSecondary={item.info[1]}
              headerPrimaryStyle={styles.headerPrimaryStyle}
              headerSecondaryStyle={styles.addCard}
              linkDescription={'Edit'}
              bookMarkIcon="edit"
              bookMarkIconColor={Colors.primaryText}
              bookMarkIconSize={19}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    );
  };
  const _renderSectionFooter = _renderSectionHeader => {
    // console.log(_renderSectionHeader.section.title);
    if (_renderSectionHeader.section.title === 'Card Information') {
      return (
        <TouchableOpacity>
          <View style={styles.addCardContainer}>
            <Feather
              style={{marginRight: 7}}
              name="plus"
              size={22}
              color={Colors.primaryText}

              // onPress={console.log(Colors.primaryText)}
            />
            <Text style={styles.addCard}>Add Cards</Text>
            <ListButton>
              {/* <Text style={styles.addCard}>Add Cards</Text> */}
            </ListButton>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View>
        <LoginButton
          onPress={logoutUser}
          title={strings.logout}
          style={styles.logout}
        />
      </View>
    );
  };

  const _renderSectionHeader = ({section}) => {
    return (
      <View style={styles.dataHeaders}>
        <Text style={styles.dataHeaderText}>{section.title}</Text>
      </View>
    );
  };
  useEffect(() => {
    if (user === null) {
      props.navigation.navigate('Auth');
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Svg
          viewBox={`-0 -0 ${sqrProfImg.d} ${sqrProfImg.d}`}
          width={sqrProfImg.d}
          height={sqrProfImg.d}>
          <Circle
            fill={Colors.inputBackground} //"rgba(216,216,216,1)"
            fillOpacity={1}
            cx={sqrProfImg.r}
            cy={sqrProfImg.r}
            r={sqrProfImg.r}
          />
          <SVGText
            // strokeWidth={1}
            style={{fontFamily: 'AvenirNext-Regular'}}
            fontWeight="lighter"
            fill={Colors.primaryText}
            fontSize={sqrProfImg.fontSize}
            x={sqrProfImg.r}
            y={sqrProfImg.r + sqrProfImg.fontSize / 3}
            textAnchor="middle">
            {user
              ? `${user.metadata.name.first.charAt(
                  0,
                )}${user.metadata.name.last.charAt(0)}`
              : ''}
          </SVGText>
          <Circle
            onPress={() => console.log('button pressed')}
            fill={Colors.primaryText} //todo change colors based on click
            fillOpacity={0.25}
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
          />
          <Path
            strokeWidth={2}
            fill="transparent"
            stroke={Colors.white}
            fillOpacity={1}
            strokeOpacity={1}
            d={sqrProfImg.dH}
          />
        </Svg>
      </View>

      <View style={styles.displayName}>
        <Text style={styles.userName}>
          {user ? `${user.metadata.name.first} ${user.metadata.name.last}` : ''}
        </Text>
        <Text style={styles.subUserName}>SAVING RECEIPTS SINCE 2017</Text>
        {/* change 2017 to populated date */}
        {/* <View style={styles.displayName}> //* Logout Button -- relocate
          <TouchableOpacity onPress={logoutUser}>
            <Text style={styles.logout}>{strings.logout}</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <SectionList
        sections={sections}
        renderItem={_renderItem}
        renderSectionHeader={_renderSectionHeader}
        renderSectionFooter={_renderSectionFooter}
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
    color: Colors.primaryText,
    fontFamily: 'AvenirNext-Bold',
  },
  headerStyle: HeaderStyles.appHeader,
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Profile;
