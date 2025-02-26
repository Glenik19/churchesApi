<script>
    import img from "$lib/assets/church.jpg";

    console.log(img);

</script>

<style>
        .container {
        background: white;
        padding: 20px;
        border-radius: 10px;
        max-width: 600px;
        width: 100%;
        margin: auto;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        }

        h1 {
            color: red;
        }
        .btn {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: white;
        background-color: #007BFF;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        margin: 15px 0;
        cursor: pointer;
    }
        .btn:hover {
            background-color: #0056b3;
        }
</style>

    <div class="container" style="background-image: url({img});">
        <h1>CHURCHES IN ALBANIA</h1>
        <div>
			
			<a class="btn" href="/api/churche">Churches Overview</a>
		</div>
		
    </div>
