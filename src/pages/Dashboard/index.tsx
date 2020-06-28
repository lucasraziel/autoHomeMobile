import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Container, Rooms, RoomPanel, RoomText } from './styles';
import api from '../../services/api';

interface Room {
  name: string;
}

const Dashboard: React.FunctionComponent = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    async function load(): Promise<void> {
      const response = await api.get('/rooms');

      setRooms(response.data);
    }

    try {
      load();
    } catch {
      Alert.alert('Erro na atualização');
    }
  }, []);
  return (
    <Container>
      <Rooms
        data={rooms}
        keyExtractor={(room) => room.name}
        renderItem={({ item }) => (
          <RoomPanel onPress={() => navigate('Room', { roomName: item.name })}>
            <RoomText>{item.name}</RoomText>
          </RoomPanel>
        )}
      />
    </Container>
  );
};

export default Dashboard;
