import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'
import { colors } from '../theme/colors'
import { CustomBackArrow } from './CustomBackArrow'
import { CustomKeyboardAvoidingView } from './CustomKeyboardAvoidingView'
import { CustomProfileButton } from './CustomProfileButton'
import { LinearGradient } from 'expo-linear-gradient';

export const CustomHeaderScreen = ({
  children,
  title = '',
  logo,
  back,
  profile
}: React.PropsWithChildren<{
  title?: string;
  logo?: boolean;
  back?: boolean;
  profile?: boolean;
}>) => {
  
  const {top} = useSafeAreaInsets()
  const margin = top || 20
  
  return (
    <View style={{flex: 1}}>
      {logo ? (
        <View style={customScreenStyles.container_logo}>
          <StatusBar barStyle="light-content" />
          
          <View
            style={{
              ...customScreenStyles.headerContainer,
              paddingTop: top ? top : 10,
              height: 65 + (top ? top : 5),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: styles.globalMargin.marginHorizontal,
              paddingBottom: 10
            }}
          >
            <LinearGradient
              // Background Linear Gradient
              colors={[colors.darkPrimary, colors.primary, colors.lightPrimary, 'white']}
              style={{position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 80}}
            />
            <View
              style={{
                width: '7%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {back && <CustomBackArrow white />}
            </View>

            <View>
              <Text style={customScreenStyles.idiomaPlay}>IdiomaPlay</Text>
            </View>

            <View
              style={{
                width: '7%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {profile && (
                <CustomProfileButton white/>
              )}
            </View>
          </View>
          

          <CustomKeyboardAvoidingView style={{flex: 1}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps={'handled'}
            >
              {children}
            </ScrollView>
          </CustomKeyboardAvoidingView>
        </View>
      ) : (
        <View style={{ ...customScreenStyles.container, marginTop: margin }}>
          <View style={customScreenStyles.header}>
            {back && <CustomBackArrow />}
            <View style={customScreenStyles.title}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          <CustomKeyboardAvoidingView>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps={'handled'}
            >
              {children}
            </ScrollView>
          </CustomKeyboardAvoidingView>
        </View>
      )}

  </View>
  )
}

const customScreenStyles = StyleSheet.create({
  container: {
    ...styles.globalMargin, 
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    alignItems: 'center',
    flex: 1,
    marginRight: 25
  },
  container_logo: {
    flex: 1,
  },
  headerContainer: {
    // backgroundColor: colors.primary,
    width: '100%',
  },
  idiomaPlay: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
