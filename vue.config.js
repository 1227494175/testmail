module.exports = {
    configureWebpack: {
        resolve:{
            alias:{
                'assets': '@/assets',
                // 'components': 'src/components',
                'common': '@/common',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}