pageName=$1

mkdir ./src/pages/${pageName}

echo "<template>
  <div class=\"$pageName-page\">

  </div>
</template>

<script>
export default {
    name:\"$pageName\"
}
</script>

<style scoped lang=\"scss\">
.$pageName-page{

}
</style>" > ./src/pages/${pageName}/${pageName}.vue
