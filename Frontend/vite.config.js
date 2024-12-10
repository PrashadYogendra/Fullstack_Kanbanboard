export default {
    server: {
      proxy: {
        '/api': {
          target: 'https://fullstack-kanbanboard-6.onrender.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  