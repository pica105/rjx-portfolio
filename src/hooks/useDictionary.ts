import { useAppStore } from '@/store/useAppStore';
import { en } from '@/content/en';
import { ru } from '@/content/ru';

export function useDictionary() {
  const language = useAppStore((s) => s.language);
  return language === 'ru' ? ru : en;
}
