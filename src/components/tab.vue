<template> 
<header class="header">
    <div class="wrap">
        <div class="logo">Znav</div>
        <nav class="nav">
            <ul>
                <li><router-link to="/">sites</router-link></li>
                <li><router-link to="/category">shows</router-link></li>
                <li><router-link to="/todos">todos</router-link></li>
                <li><a href="http://zervanto.farbox.com/">blog</a></li>
            </ul>
        </nav>
    </div>
</header> 
</template>
<script>
    export default{
        data(){
            return {
                
            }
        }      
    }
</script>
<style scoped>
.header{
    width: 100%;
    height: 50px;
    background-color: #555;
}
.wrap{
    width:1000px;
    margin: 0 auto;
}
.header .wrap .logo{
    float: left;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
}
.header .wrap .nav{
    float: right;
    height: 50px;
}
.nav ul li {
    float: left;
    margin: 0 10px ;
}
.nav ul li:hover {
    background-color:#FFF;
    border:1px solid #555;
}
.nav ul li a{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
}
</style>

