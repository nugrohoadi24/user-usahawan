<template>
    <div>
        <div class="laporan">
        <div class="row">
            <div class="col-md-3 laporan-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Data Pelapor</h3>
                <p>Silahkan isi data Anda (Pelapor), kami akan bantu proses laporannya.</p>
                <a href="/" @click="removeDataPelapor">
                    <input type="submit" name="" value="Kembali"/><br/>
                </a>
            </div>
            <div class="col-md-9 laporan-right">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="laporan-heading">Form Laporan Pelapor</h3>
                        <form 
                            class="was-validated needs-validation row laporan-form" 
                            v-on:submit.prevent="saveDataPelapor">
                            <div class="col-md-6">
                                    <div class="form-group" for="nama_pelapor">
                                        <input 
                                            type="text" 
                                            name="nama_pelapor" 
                                            id="nama_pelapor" 
                                            v-model="nama_pelapor" 
                                            class="form-control m-2" 
                                            placeholder="Nama Pelapor *"
                                            required /> 
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control m-2" name="jenis_kelamin_pelapor" id="jenis_kelamin_pelapor" v-model="jenis_kelamin_pelapor" required>
                                            <option 
                                                class="hidden" 
                                                value="" 
                                                selected disabled>Jenis Kelamin *</option>
                                            <option>Laki-Laki</option>
                                            <option>Perempuan</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="date" 
                                            name="tanggal_lahir_pelapor" 
                                            id="tanggal_lahir_pelapor" 
                                            v-model="tanggal_lahir_pelapor" 
                                            class="form-control m-2"  
                                            placeholder="Tanggal Lahir Pelapor *" 
                                            required/>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="number" 
                                            name="no_telp_pelapor" 
                                            id="no_telp_pelapor" 
                                            v-model="no_telp_pelapor" 
                                            minlength="10" maxlength="13" 
                                            class="form-control m-2" 
                                            placeholder="Nomor Telepon Pelapor *" 
                                            required/>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="email" 
                                            name="email_pelapor" 
                                            id="email_pelapor" 
                                            v-model="email_pelapor" 
                                            class="form-control m-2" 
                                            placeholder="Email Pelapor *" 
                                            required/>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="text" 
                                            name="nama_pembina_pelapor" 
                                            id="nama_pembina_pelapor" 
                                            v-model="nama_pembina_pelapor" 
                                            class="form-control m-2" 
                                            placeholder="Nama Pembina *" 
                                            required/>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="text" 
                                            name="nama_dpd_pelapor" 
                                            id="nama_dpd_pelapor" 
                                            v-model="nama_dpd_pelapor" 
                                            class="form-control m-2" 
                                            placeholder="Nama Ketua DPD Domisili *" 
                                            required/>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select 
                                            name="provinsi_pelapor" 
                                            id="provinsi_pelapor" 
                                            v-model="provinsi_pelapor" 
                                            class="form-control m-2" 
                                            @change="dataKabkota"
                                            required>
                                            <option 
                                                class="hidden" 
                                                value="" 
                                                selected disabled>Provinsi Pelapor *</option>
                                            <option
                                                v-for="getProvinsi in provinsi"
                                                v-bind:key="getProvinsi.id"
                                                v-bind:value="getProvinsi.id">
                                                {{ getProvinsi.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select 
                                            name="kota_pelapor" 
                                            id="kota_pelapor" 
                                            v-model="kota_pelapor" 
                                            class="form-control m-2" 
                                            @change="dataKecamatan"
                                            >
                                            <option 
                                                class="hidden" 
                                                value="" 
                                                selected disabled>Kabupaten/Kota Pelapor *</option>
                                            <option
                                                v-for="getKabkota in kabkota"
                                                v-bind:key="getKabkota.id"
                                                v-bind:value="getKabkota.id">
                                                {{ getKabkota.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select 
                                            name="kecamatan_pelapor" 
                                            id="kecamatan_pelapor" 
                                            v-model="kecamatan_pelapor"
                                            class="form-control m-2" 
                                            @change="dataKelurahan"
                                            >
                                            <option 
                                                class="hidden" 
                                                value="" 
                                                selected disabled>Kecamatan Pelapor *</option>
                                            <option
                                                v-for="getKecamatan in kecamatan"
                                                v-bind:key="getKecamatan.id"
                                                v-bind:value="getKecamatan.id">
                                                {{ getKecamatan.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select 
                                            name="kelurahan_pelapor" 
                                            id="kelurahan_pelapor" 
                                            v-model="kelurahan_pelapor" 
                                            class="form-control m-2" 
                                            >
                                            <option 
                                                class="hidden" 
                                                value="" 
                                                selected disabled>Kelurahan Pelapor *</option>
                                            <option
                                                v-for="getKelurahan in kelurahan"
                                                v-bind:key="getKelurahan.id"
                                                v-bind:value="getKelurahan.id">
                                                {{ getKelurahan.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <textarea 
                                            name="alamat_pelapor" 
                                            id="alamat_pelapor" 
                                            v-model="alamat_pelapor" 
                                            class="form-control is-invalid m-2" 
                                            placeholder="Alamat Lengkap Pelapor *" 
                                            required>
                                        </textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label class="form-group mt-2 left-2 fix-btm-2">Tanggal Transaksi</label>
                                    <div class="form-group">
                                        <input 
                                            type="date" 
                                            name="tanggal_transaksi" 
                                            id="tanggal_transaksi" 
                                            v-model="tanggal_transaksi" 
                                            class="form-control m-2"  
                                            placeholder="Tanggal Transaksi *" 
                                            required/>
                                    </div>
                                    <label class="form-group mt-2 left-2 fix-btm-2">Total Hutang/Kerugian</label>
                                    <div class="form-group">
                                        <input 
                                            type="text" 
                                            name="total_kerugian" 
                                            id="total_kerugian" 
                                            v-model="total_kerugian" 
                                            class="form-control m-2" 
                                            placeholder="Total Hutang/Kerugian *"
                                            @change="formatPrice"
                                            required/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6">
                                    <input 
                                        type="submit" 
                                        class="btnlaporan text-center font-white" 
                                        value="Selanjutnya"/>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Pelapor',
    data() {
        return {
            dataLaporan1: [],
            nama_pelapor: '',
            jenis_kelamin_pelapor: '',
            tanggal_lahir_pelapor: '',
            provinsi_pelapor: '',
            kota_pelapor: '',
            kecamatan_pelapor: '',
            kelurahan_pelapor: '',
            alamat_pelapor: '',
            no_telp_pelapor: '',
            email_pelapor: '',
            nama_pembina_pelapor: '',
            nama_dpd_pelapor: '',
            tanggal_transaksi: '',
            total_kerugian: '',

            provinsi: [],
            kabkota: [],
            kecamatan: [],
            kelurahan: [],
        }
    },
    methods: {
        saveDataPelapor() {
            var number = this.total_kerugian.replace(/Rp/g, '').replace('.', '').trim();

            var pelaporStored = {
                "nama_pelapor": this.nama_pelapor,
                "jenis_kelamin_pelapor": this.jenis_kelamin_pelapor,
                "tanggal_lahir_pelapor": this.tanggal_lahir_pelapor,
                "provinsi_pelapor": this.provinsi_pelapor,
                "kota_pelapor": this.kota_pelapor,
                "kecamatan_pelapor": this.kecamatan_pelapor,
                "kelurahan_pelapor": this.kelurahan_pelapor,
                "alamat_pelapor": this.alamat_pelapor,
                "no_telp_pelapor": this.no_telp_pelapor,
                "email_pelapor": this.email_pelapor,
                "nama_pembina_pelapor": this.nama_pembina_pelapor,
                "nama_dpd_pelapor": this.nama_dpd_pelapor,
                "tanggal_transaksi": this.tanggal_transaksi,
                "total_kerugian": number,   
            }
            
            const parsed = JSON.stringify(pelaporStored);
            localStorage.setItem('dataLaporan1', parsed);
            this.$router.push('/terlapor');
        },
        removeDataPelapor() {
            localStorage.removeItem('dataLaporan1')
        },
        formatPrice(input) {
            var number = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(input.target.value);
            this.total_kerugian = number;
        },
        async dataProvinsi() {
            axios
            .get("http://localhost/api/provinsi")
            .then(res => (this.provinsi = res.data.data))
            .catch(err => console.log(err));
        },
        async dataKabkota(event) {
            axios
            .get("http://localhost/api/kabkota?province_id="+event.target.value)
            .then(res => (this.kabkota = res.data.data))
            .catch(err => console.log(err));
        },
        async dataKecamatan(event) {
            axios
            .get("http://localhost/api/kecamatan?regency_id="+event.target.value)
            .then(res => (this.kecamatan = res.data.data))
            .catch(err => console.log(err));
        },
        async dataKelurahan(event) {
            axios
            .get("http://localhost/api/kelurahan?district_id="+event.target.value)
            .then(res => (this.kelurahan = res.data.data))
            .catch(err => console.log(err));
        },
    },
    mounted() {
        this.dataProvinsi();

        if (localStorage.getItem('productCheckout')) {
              this.productCheckout = JSON.parse(localStorage.getItem('productCheckout'));
        }

        if (localStorage.getItem('dataLaporan1')) {
            try {
                this.dataLaporan1 = JSON.parse(localStorage.getItem('dataLaporan1'));
                
                this.nama_pelapor = this.dataLaporan1.nama_pelapor;
                this.jenis_kelamin_pelapor = this.dataLaporan1.jenis_kelamin_pelapor;
                this.tanggal_lahir_pelapor = this.dataLaporan1.tanggal_lahir_pelapor;
                this.provinsi_pelapor = this.dataLaporan1.provinsi_pelapor;
                this.kota_pelapor = this.dataLaporan1.kota_pelapor;
                this.kecamatan_pelapor = this.dataLaporan1.kecamatan_pelapor;
                this.kelurahan_pelapor = this.dataLaporan1.kelurahan_pelapor;
                this.alamat_pelapor = this.dataLaporan1.alamat_pelapor;
                this.no_telp_pelapor = this.dataLaporan1.no_telp_pelapor;
                this.email_pelapor = this.dataLaporan1.email_pelapor;
                this.nama_pembina_pelapor = this.dataLaporan1.nama_pembina_pelapor;
                this.nama_dpd_pelapor = this.dataLaporan1.nama_dpd_pelapor;
                this.tanggal_transaksi = this.dataLaporan1.tanggal_transaksi;
                this.total_kerugian = this.dataLaporan1.total_kerugian;
            } catch(e) {
                localStorage.removeItem('dataLaporan1')
            }
        }
    },
}
</script>

<style>

</style>