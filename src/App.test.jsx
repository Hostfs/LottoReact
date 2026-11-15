import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('제목과 생성 버튼을 보여준다', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: '랜덤 로또 번호 생성기' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '로또 번호 생성' })).toBeInTheDocument();
  });

  test('버튼을 누르면 1~45 사이의 중복 없는 번호 6개를 오름차순으로 보여준다', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: '로또 번호 생성' }));

    const text = screen.getByText(/생성된 로또 번호:/).textContent;
    const numbers = text.replace('생성된 로또 번호:', '').split(',').map((n) => Number(n.trim()));

    expect(numbers).toHaveLength(6);
    expect(new Set(numbers).size).toBe(6);
    numbers.forEach((n) => {
      expect(Number.isInteger(n)).toBe(true);
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(45);
    });
    expect(numbers).toEqual([...numbers].sort((a, b) => a - b));
  });
});
