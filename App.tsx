import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';

import Card from './src/components/Card';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';

export default function App() {
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple validation
    if (!nama || !password) {
      Alert.alert('Peringatan', 'Nama dan Password tidak boleh kosong!');
      return;
    }
    Alert.alert('Login Berhasil', `Selamat datang, ${nama}!`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Judul di luar Card */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Halo, Selamat Datang</Text>
        <Text style={styles.subtitle}>Silakan masuk untuk melanjutkan</Text>
      </View>

      {/* Card Utama - Menggunakan variant 'elevated' agar terlihat modern */}
      <Card 
        variant="elevated" // Menggunakan style baru
        padding="large"
      >
        {/* Judul di dalam Card */}
        <Text style={styles.cardTitle}>Masuk</Text>
        
        {/* Input Fields */}
        <CustomInput
          label="Nama Lengkap"
          placeholder="cth: John Doe"
          value={nama}
          onChangeText={setNama}
        />

        <CustomInput
          label="Password"
          placeholder="Masukkan password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Link Lupa Password */}
        <Text style={styles.forgotText}>Lupa Password?</Text>

        {/* Tombol Aksi */}
        <CustomButton
          title="Login"
          onPress={handleLogin}
        />

        <CustomButton
          title="Register"
          variant="secondary" // Jika CustomButton support variant
          onPress={() => Alert.alert('Register', 'Fitur Register belum tersedia')}
        />
      </Card>

      {/* Footer Copyright */}
      <Text style={styles.footerText}>
        © 2024 Aplikasi Saya
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Background abu-abu muda (sama kayak new Card)
    justifyContent: 'center',
    padding: 20,
  },

  headerContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '800', // Extra bold
    color: '#111827',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
    textAlign: 'center',
  },

  forgotText: {
    textAlign: 'right',
    color: '#4F46E5', // Warna biru Muda (Indigo)
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 20,
    marginTop: 4,
  },

  footerText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#9CA3AF',
    fontSize: 12,
  },
});