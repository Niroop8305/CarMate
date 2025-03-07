import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Button,
  Linking,
} from 'react-native';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('unlock');

  const handleTabPress = tab => {
    setSelectedTab(tab);
  };

  const handlePress = () => {
    Linking.openURL(
      'https://www.google.com/maps/search/nearest+petrol+station/@17.9701507,79.6165203,3155m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D',
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* <View style={styles.headerLeft}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
        </View> */}
        {/* <View style={styles.headerRight}> */}
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Features</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Download</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
      <View style={styles.hero}>
        <View style={{marginBottom: 20}}>
          <View style={{flexDirection: 'row', alignContent: 'flex-start'}}>
            <View>
              <Text style={styles.heroTitle}>Explore the</Text>
              <Text style={styles.heroTitle}>Ultimate</Text>
              <Text style={styles.heroTitle}>Driving</Text>
              <Text style={styles.heroTitle}>Experience</Text>
            </View>
            <View>
              <Image
                source={require('./src/car.png')}
                style={styles.heroImage}
              />
            </View>
          </View>
          {/* <View style={{height: 20}}></View> */}
          <Text style={styles.heroDescription}>
            Discover the future of vehicle technology and connectivity.
          </Text>
        </View>
        <View style={styles.heroButtons}>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>View Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.heroQuoteButton}>
            <Text style={styles.heroQuoteButtonText}>Get a Quote</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => handleTabPress('unlock')}
          style={[styles.tab, selectedTab === 'unlock' && styles.tabActive]}>
          <Text style={styles.tabText}>Car Highlighits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('optimize')}
          style={[styles.tab, selectedTab === 'optimize' && styles.tabActive]}>
          <Text style={styles.tabText}>Optimize</Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'unlock' && (
        <View style={styles.unlockSection}>
          <TouchableOpacity style={styles.unlockCard}>
            <Text style={styles.cardTitle}>Fuel Tracking</Text>
            <Text style={styles.cardDescription}>Milage: 14.6 KM</Text>
            <Text style={styles.cardDescription}>Fuel Range: 273 KM</Text>
            <Text style={styles.cardDescription}>Fuel Quality: 10 ppm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.unlockCard}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.cardTitle}>Nearest</Text>
                <Text style={styles.cardTitle}>Petrol Bunk:</Text>
              </View>
              <View style={{flex: 1}}>
                <Image
                  source={require('./src/PetrolBunk.png')}
                  style={{alignSelf: 'flex-end', width: 50, height: 50}}
                />
              </View>
            </View>
            <Button title="Open External Link" onPress={handlePress} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.unlockCard}>
            <Text style={styles.cardTitle}>Tyre Life Monitoring</Text>
            <Text style={styles.cardDescription}>
              Comprehensive Engine Diagnostics and Maintenance Insights
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.unlockCard}>
            <Text style={styles.cardTitle}>
              Nearest Authorized Service Centers
            </Text>
            <Text style={styles.cardDescription}>
              Your car is in good condition ✅
            </Text>
            <TextInput
              placeholder="Search for nearest service centers"
              style={styles.input}
            />
          </TouchableOpacity>
        </View>
      )}
      {selectedTab === 'optimize' && (
        <View style={styles.optimizeSection}>
          <View style={styles.optimizeCard}>
            {/* <Image source={require('./assets/phone.png')} style={styles.phoneImage} /> */}
            <View style={styles.phoneContent}>
              <Text style={styles.phoneTitle}>FR03253678 et Tim</Text>
              <Text style={styles.phoneDescription}>
                Recurrent engine light alarms
              </Text>
              <View style={styles.phoneStats}>
                <View style={styles.phoneStat}>
                  <Text style={styles.phoneStatValue}>128</Text>
                  <Text style={styles.phoneStatLabel}>Km in total</Text>
                </View>
                <View style={styles.phoneStat}>
                  <Text style={styles.phoneStatValue}>423</Text>
                  <Text style={styles.phoneStatLabel}>Km per 1000</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.phoneButton}>
                <Text style={styles.phoneButtonText}>In app</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.optimizeCard}>
            {/* <Image source={require('./assets/car-dashboard.png')} style={styles.carDashboardImage} /> */}
            <View style={styles.carDashboardContent}>
              <View style={styles.carDashboardStats}>
                <Text style={styles.carDashboardStat}>
                  <Text style={styles.carDashboardStatValue}>40.0</Text>
                  <Text style={styles.carDashboardStatLabel}>Fre-Time 125</Text>
                </Text>
                <Text style={styles.carDashboardStat}>
                  <Text style={styles.carDashboardStatValue}>2.2</Text>
                  <Text style={styles.carDashboardStatLabel}>Total</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#2aa89b',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'black',
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    // marginLeft: 1,
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: 100,
    height: 30,
  },
  hero: {
    padding: 20,
    backgroundColor: '#2aa89b',
    borderRadius: 25,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    // marginBottom: 10,
    color: 'black',
  },
  heroDescription: {
    fontSize: 16,
    // marginBottom: 20,
  },
  heroButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heroButton: {
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  heroQuoteButton: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  heroQuoteButtonText: {
    color: '#000',
    fontSize: 16,
  },
  heroImage: {
    resizeMode: 'contain',
    width: 190,
    height: 250,
    marginTop: -50,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#000',
  },
  tab: {
    padding: 10,
    borderRadius: 5,
  },
  tabActive: {
    backgroundColor: '#007bff',
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  unlockSection: {
    padding: 20,
    backgroundColor: '#2aa89b',
    borderRadius: 25,
  },
  unlockCard: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  },
  optimizeSection: {
    padding: 20,
  },
  optimizeCard: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
  },
  phoneImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  phoneContent: {
    padding: 20,
  },
  phoneTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phoneDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  phoneStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  phoneStat: {
    alignItems: 'center',
  },
  phoneStatValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phoneStatLabel: {
    fontSize: 12,
  },
  phoneButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  phoneButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  carDashboardImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  carDashboardContent: {
    padding: 20,
  },
  carDashboardStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carDashboardStat: {
    alignItems: 'center',
  },
  carDashboardStatValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carDashboardStatLabel: {
    fontSize: 12,
  },
});

export default App;
