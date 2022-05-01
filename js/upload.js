const ipfs = window.IpfsHttpClient('infura-ipfs.io', '5001', { protocol: 'https' });

        $("#upload").on("change", function () {
            document.getElementById("link").innerHTML = "Starting upload...";
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("link").innerHTML = "Progress Uploading file, Please wait...";

                const magic_array_buffer_converted_to_buffer = buffer.Buffer(reader.result);
                ipfs.add(magic_array_buffer_converted_to_buffer, (err, result) => {
                    console.log(err, result);

                    let ipfsLink = "<a target='_blank' href='https://dweb.link/ipfs/" + result[0].hash + "'>https://dweb.link/ipfs/" + result[0].hash +  "</a><br><a target='_blank' href='https://ipfs.infura.io/ipfs/" + result[0].hash + "'>https://ipfs.infura.io/ipfs/" + result[0].hash +  "</a><br><a target='_blank' href='https://cf-ipfs.com/ipfs/" + result[0].hash + "'>https://cf-ipfs.com/ipfs/" + result[0].hash +  "</a>";
                    document.getElementById("link").innerHTML = ipfsLink;

                })
            }
            reader.readAsArrayBuffer(this.files[0]);
        })      
