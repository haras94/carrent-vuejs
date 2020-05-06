<script>
export default {
  name: 'Logout',
  created () {
    delete localStorage.id
    this.$router.push('/login')
  }
}
</script>
