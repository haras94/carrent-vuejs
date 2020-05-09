<script>
export default {
  name: 'Logout',
  created () {
    delete localStorage.id
    delete localStorage.rentalName
    this.$router.replace('/login')
  }
}
</script>
