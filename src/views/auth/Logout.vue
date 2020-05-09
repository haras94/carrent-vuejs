<script>
export default {
  name: 'Logout',
  created () {
    delete localStorage.id
    this.$router.replace('/login')
  }
}
</script>
