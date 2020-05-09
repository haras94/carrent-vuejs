<script>
export default {
  name: 'Logout',
  created () {
    delete localStorage.id
    delete localStorage.rentalName
    delete localStorage.role_id
    this.$router.replace('/login')
  }
}
</script>
