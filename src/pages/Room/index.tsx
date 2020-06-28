import React, { useEffect, useCallback, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import api from '../../services/api';

import {
  Container,
  Lamps,
  LampPanel,
  LampText,
  RoomOption,
  RoomOptionPanel,
  RoomOptionText,
} from './styles';
import { RootStackParamList } from '../../routes/index';

type Props = StackScreenProps<RootStackParamList, 'Room'>;

interface Lamp {
  name: string;
  state: boolean;
  address: number;
}

const Room: React.FunctionComponent<Props> = ({ route }) => {
  const { roomName } = route.params;
  const [lamps, setLamps] = useState<Lamp[]>([]);

  const loadData = useCallback(async () => {
    const response = await api.get(`rooms/${roomName}`);
    setLamps(response.data);
  }, [roomName]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSwitch = useCallback(
    async (address: number, state: boolean) => {
      await api.patch(`lamps/${address}`, { state });
      loadData();
    },
    [loadData]
  );

  const handleSwitchRoom = useCallback(
    async (state: boolean) => {
      await api.patch(`rooms/${roomName}`, { state });
      loadData();
    },
    [loadData, roomName]
  );

  return (
    <Container>
      {lamps.length > 1 && (
        <RoomOptionPanel>
          <RoomOption onPress={() => handleSwitchRoom(false)}>
            <RoomOptionText>Desligar todas as lâmpadas</RoomOptionText>
          </RoomOption>
          <RoomOption onPress={() => handleSwitchRoom(true)}>
            <RoomOptionText>Ligar todas as lâmpadas</RoomOptionText>
          </RoomOption>
        </RoomOptionPanel>
      )}
      <Lamps<Lamp>
        data={lamps}
        keyExtractor={(lamp) => lamp.name}
        renderItem={({ item }) => (
          <LampPanel
            lampState={item.state}
            onPress={() => handleSwitch(item.address, !item.state)}
          >
            <LampText lampState={item.state}>{item.name}</LampText>
          </LampPanel>
        )}
      />
    </Container>
  );
};

export default Room;
