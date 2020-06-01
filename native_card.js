import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { AppLoading } from 'expo';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true
    }
  }

  async UNSAFE_componentWillMount(){
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({isLoading:false})
  }


  render(){

    if(this.state.isLoading){
      return <AppLoading />;
    }

    return (
    <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAggMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xAA8EAABAwIEAwYDBAgHAAAAAAABAAIDBBEFEiExBkFRBxMiYXGBI5GxFFKh0RYzNUJic8HhFTJDcpKy8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgQDBf/EAB4RAQEBAQEAAwEBAQAAAAAAAAABAhEDEiExIjJB/9oADAMBAAIRAxEAPwC6QsT2KNJwsT2Ji6uMdjjS7WIzGpVoSUK1iOG2RgFSO1Hix2AYW2koH5a+qBDXj/TZzd/QJHIU4v7Q8I4be+laDW1zd4YzYM/3O2Hpqs2rO2DiOaQ/ZYKOnZyAZnIHqfyWfVVQ6Sc3zSyOOpOtyn9Bh8+UPNI55doAWKflJ+rmer/hPa3jMMzDiUFNVwO0OVvdvHy0Wi8Mcc4LxFJ3FPMYKwDxU02jvbqsFfw9Vkl0t47DMGnRMZnOpZ45Y5DHPE67ZWGzmkbFE1L+DWLP16tIuEUsVb7P+I/0i4fgq5LfaWHu6kD745+4sfdWkhU5mr401liUiWpF7EBDzRKOqIt1OzRphURbpkhe78kE87pBNPE9CxPI22SELU7YElDtCUARWhKBI3DsvOnabiUmLcZVUVO7MWPFPGOmXf8AG69EyGzDovPGG0TantBxLO0k08szrH7xefzUbvJ10xO64nOEeFqWnja6oYHVDgCXuFyFdWYPCQwEjKw3Ayjp1UJFieFUs5bPWBrhuA0kfNWikq6aWESQSNkabC7TdYu3va3/AFJyIvGcMp5aYgNbmAs3yWQcXYPNTzOqYo/hnVw+6VsmL4phVLdlVVNY4nQNBJv7Kv1TaHEIZGQu7xrwb3BCedXN6NzOs8RnYVWk12I0ZOj4WyNA5kGx+oW0x6sF+SwXsZY6m4xqqdw/VwyMJv0c3+y3mE+Fbo87X6MQk3tSyI4JpM5WJjPHupR4TOZu6YRfdoJzkQQSSiCcsCbxpwxBlGoyKEZIEavvRTymA/EyHJ620WEcLwVsnFmJz11/tE8bnOJbbxZhe1uS3w81nWJU8VBxQ9rHMzmNzw3nlJ/PRcPa2T6d/GS37VyXA6wVEHxJmNEjjMGRXD2XFgOh0I91ZOGqWejkmuCGujcRnGunVT9A6OSMF1iUjDV0UdZVsnqGteGWyk6tCy/O2N3xkqk4rhVVNJNK7vu9IvE5jMzWuvfUdLae6UwrC6umLXudJ3QYA/vBYl9tT5BXDB3xVELy17ZI2u8Lxt6IuJTRtBDbWsi7vOD4ztrKOHaXE6bjWqxDDyWtbO5rh+6/yK32lc7KA7e2qofBWHZn1FWWjKHmzrbu5/JX6Btm3K2eXbO1g9fj3kLrjl1cK6uRJ4TWUbp29N5QgjLKuo9lxBHMZThqbRlLtKDKhHukwUC6wQBZnhjSei838WcR1H6cS4o17rRzZMoO8bTt7rfccqhT0FRK6/hYbAb7Ly9i1RHJWSnUkuJPkleVWfpslPiD5IGy0M4eHAOjF7BwPmgyqq62SR0tPRMezcTVFneXJUvgf7V/gpkh8YZKcrT08lcKPF6Qi9XSjOBYh7LhedqSasenjXZLSgr8SDjTwxQZWm7nxTXb6baplxFjH+H4NUVEkgM2TIxt93nQW+vsnNTisb/hYfTWJ5gWAWfdoJmirKPvCS0Mcbcr81Xnma0n11Zm8aL2JYx9swCTD5XXmpZSdTclrtb/ADJWptN15w7MKuSj4pYad57qdhFr8+n1Xoellzx6781vjzad3XCdEUFdJTAjkhLslnJCQ6II3sghqggDRFOGlMonKk8WdpkeA4tJhlLQ/aZYwA+R0mVrXEbWtcpho4KbVtfS0UZfV1MULQL3e8D6rC8W7R8exImNlSKSP7tOLH/luq9JVS1Ly+eZ8rty57i4/ijgalxzx9h0dJJT4aRVSOBBe11mt9+awotfNM55afE65UtWEzNaGus0HxBFAayzQBruUuKjQuAIjBw9Tve0gEudfyJNirXFRwSOL3RjXfkmnAohn4bpIYpaeUiINc3OCW+RCs7cOYIgxzTmA5FeV6TXyter53PwivVEVPSMtGwZ3mwtuq7xVgD8QoZy9nijiL2kjYhX52HCKds4AIY2wLth5qm8Y8a0NBFPSUIZV1TmEOLXeCP1PM+iflje9fzC9d4zn+mWYfJUUFRDWUUvdu0dZbLwd2iUtRE2nxktpphYCX9x/wCSx+LIIxHrdgHulKeUNf3btjsvV48uvUMFRFPGHwyNkYRcOabgpXMvM1Ji9ZhlR3mHVc0D2ndjyAfUbFaFwz2rDw0/EMdulVC3/s0f0QlqjnJCRybUOK0OJwNmoKqKdjtix1//ABHkdokHMy4kc6CALFILei848UVzq7H66rO8srnj0DvyXoATtZE9z3BrA0kk8gvN1fJG6sfkfmBe8X8idEX6PIzH3I15p4DZm+6iYHEPseSkXHwn0Th8KCIhxeTp0RWayj1SpN4/ZIwH4oCYosDnNOZhyuDjZwNjupum4kxyBgZFi1YxoG3eXH4qEA8JI+8fqlg5x0ut8xnWZ2Ml1ZbynmI4tidbGBXYhUzM5h8ht8lG/wCZjtLXIAR59Q1pN0LaxN6uujUmc3hy3XOiu0m0KcQWF3C5dexvvdNpP14APNKh2WVxJ0tf3XntJs2U53g73SwGYxk7W1TAy/E7wczYp2ZA2FzhqLaJQ+BBUy01ayWnlMcjX3a5ptt/dejcLxD7dhtLU30mhY/3IBXmRpJma0Wvst54LqC7hfDL30itr5EhBWLOZhdBMTNqgmlVuOsTfRcK1ZiNnzZYQemY6/hdYgd1p/aRWxjAI4HO+JLMC0Dy3WXKdVefwo02kB6p4+Ww8ymG1krE/M8XRKaUifmhb6WSML7Tj1RIn2Y4dCkmPtID5qiOon3Dh/EfqlgkIWgm45k3ToABel5/5YvT9JkXcOg3QzfHjI5X+i5K/wAWgtok2frgTyBU+t/mrxPuOOdeo06o9Q6wfbom4d8W/mhWPvbzK8//AI1G0VjmB5rokPdiM7A3SUbrOQubOPXRQpy5zX5rXuz/ABo1mAxQyWElGe6Nubf3SsfV27N5yySvZfdrD8roK/jUjOboKKE+g1QVdc2cdoVQZcQpor6MiJt6n+yqamuLZxPjMlto2tZ72v8A1UKprpPwF0Gx0XEEjLxSaORc1nJMGxQun0HkT7Sl1908EgKi2OSrXkL0PHfMuHpj5U7eRnv5JN0lnPPRqbmQl10R8uhHUqPb0nx4eMcozXa3Rah2Z/4JMO1XCblYuuri7fSy4gkYKx8EVPc4rJGdpYiPkbquKQwGXusXpnfxW+YIQGmCp0GqCjO+PVBUjihYx+06n+YU0K4glVggggkAQQQQB2I6CC1+X+U39EO6Kd0EFy9DjiCCC4mCCCCACcYd+0Kb+a36oIIC7riCCZP/2Q=='}} />
                <Body>
                  <Text>Sabthavi</Text>
                  <Text note>Software Engineer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKKBt_pGO7lS4q2dCTfqqduiHgsANKSjiFAO9mmrZv_TUcUERv&usqp=CAU'}} 
              style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
}
