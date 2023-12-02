<script>
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    const sender = urlParams.get('UVL')
    
    window.location.href = sender;
</script>
