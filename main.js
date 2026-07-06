const { createApp } = Vue

const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(true)
        return {
            cart,
            premium
        }
    }
})
app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.mount('#app')

/*
        const product = ref('Boots')
        const brand = ref('SE 331')
        const inventory = ref(100)
        const details = ref([
            '50% cotton' ,
            '30% wool' ,
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50} ,
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectedVariant = ref(0)
        function updateVariant(index){
            selectedVariant.value = index;
        }
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const onSale = ref(true)
        const description = ref('Description')
        const url = ref('https://www.camt.cmu.ac.th')

        function addToCart(){
            cart.value +=1
        }
        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const saleMessage = computed(() => {
            return `${brand.value} ${product.value} is on sale`
        })


        return {
            title,
            image,
            inStock,
            inventory,
            details,
            variants,
            sizes,
            onSale,
            description,
            url,
            cart,
            addToCart,
            updateVariant,
            saleMessage
        }
    }

}).mount('#app')
*/