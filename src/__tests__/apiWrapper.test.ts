import { ApiWrapper } from '../apiWrapper';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ApiWrapper', () => {
  const api = new ApiWrapper();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should make successful GET request', async () => {
    const mockData = { 
      userId: 1, 
      id: 1, 
      title: 'Hello Mark, this is your PoC', 
      completed: false 
    };
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await api.getRequest('https://api.test.com');
    expect(result).toEqual(mockData);
  });

  it('should handle GET request error', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

    await expect(api.getRequest('https://api.test.com')).rejects.toThrow();
  });
}); 