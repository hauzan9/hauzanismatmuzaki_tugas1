import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type CardVariant = 'default' | 'info' | 'muted' | 'elevated';
type CardPadding = 'none' | 'small' | 'medium' | 'large';

interface CardProps {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  variant?: CardVariant;
  padding?: CardPadding;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  footer,
  children,
  style,
  titleStyle,
  variant = 'default',
  padding = 'medium',
  onPress,
}) => {
  // Padding Configuration
  const paddingValue = 
    padding === 'none' ? 0 :
    padding === 'small' ? 12 :
    padding === 'large' ? 24 : 20;

  // Variant Styling
  const getVariantStyle = () => {
    switch (variant) {
      case 'info':
        return { backgroundColor: '#F0F9FF', borderColor: '#BAE6FD' };
      case 'muted':
        return { backgroundColor: '#F9FAFB', borderColor: '#E5E7EB' };
      case 'elevated':
        return { backgroundColor: '#FFFFFF', borderColor: 'transparent' };
      default:
        return { backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' };
    }
  };

  // Shadow Style
  const shadowStyle = variant === 'elevated' 
    ? styles.shadowElevated 
    : styles.shadowBase;

  // Container Selection
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={[
        styles.card,
        { padding: paddingValue, ...getVariantStyle() },
        shadowStyle,
        style,
      ]}
    >
      {/* Header */}
      {(title || description) && (
        <View style={styles.header}>
          {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      )}

      {/* Body */}
      {children && <View style={styles.body}>{children}</View>}

      {/* Footer */}
      {footer && <View style={styles.footer}>{footer}</View>}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  shadowBase: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  shadowElevated: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },
  header: { marginBottom: 12 },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#6B7280',
  },
  body: { marginTop: 4 },
  footer: {
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
});

export default Card;