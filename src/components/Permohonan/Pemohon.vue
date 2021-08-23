<template>
    <div>
        <div class="laporan">
        <div class="row">
            <div class="col-md-3 laporan-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Data Pemohon</h3>
                <p>Silahkan isi data Anda (Pemohon), kami akan bantu prosesnya.</p>
                <a href="/" @click="removeDataPemohon">
                    <input type="submit" name="" value="Kembali"/><br/>
                </a>
            </div>
            <div class="col-md-9 laporan-right">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="laporan-heading">Form Permohonan Pemohon</h3>
                        <form class="was-validated needs-validation row laporan-form" v-on:submit.prevent="saveDataPemohon">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" name="nama_pemohon" id="nama_pemohon" v-model="nama_pemohon" class="form-control m-2" placeholder="Nama Pemohon *" required/>
                                </div>
                                <div class="form-group">
                                    <select class="form-control m-2" name="jenis_kelamin_pemohon" id="jenis_kelamin_pemohon" v-model="jenis_kelamin_pemohon" required>
                                        <option class="hidden" value="" selected disabled>Jenis Kelamin *</option>
                                        <option>Laki-Laki</option>
                                        <option>Perempuan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="date" name="tanggal_lahir_pemohon" id="tanggal_lahir_pemohon" v-model="tanggal_lahir_pemohon" class="form-control m-2"  placeholder="Tanggal Lahir Pemohon *" required/>
                                </div>
                                <div class="form-group">
                                    <input type="number" name="no_telp_pemohon" id="no_telp_pemohon" v-model="no_telp_pemohon" minlength="10" maxlength="13" class="form-control m-2" placeholder="Nomor Telepon Pemohon *" value="" required/>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email_pemohon" id="email_pemohon" v-model="email_pemohon" class="form-control m-2" placeholder="Email Pemohon *" value="" required/>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="nama_pembina_pemohon" id="nama_pembina_pemohon" v-model="nama_pembina_pemohon" class="form-control m-2" placeholder="Nama Pembina *" required/>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="nama_dpd_pemohon" id="nama_dpd_pemohon" v-model="nama_dpd_pemohon" class="form-control m-2" placeholder="Nama Ketua DPD Domisili *" value="" required/>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="kepentingan" id="kepentingan" v-model="kepentingan" class="form-control m-2" placeholder="Kepentingan *" value="" required/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <select @change="dataKabkota" name="provinsi_pemohon" id="provinsi_pemohon" v-model="provinsi_pemohon" class="form-control m-2" required>
                                        <option 
                                            class="hidden" 
                                            value="" 
                                            selected disabled>Provinsi Pemohon *</option>
                                        <option
                                            v-for="getProvinsi in provinsi"
                                            v-bind:key="getProvinsi.id"
                                            v-bind:value="getProvinsi.id">
                                            {{ getProvinsi.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select @change="dataKecamatan" name="kota_pemohon" id="kota_pemohon" v-model="kota_pemohon" class="form-control m-2" required>
                                        <option 
                                            class="hidden" 
                                            value="" 
                                            selected disabled>Kabupaten/Kota Pemohon *</option>
                                        <option
                                            v-for="getKabkota in kabkota"
                                            v-bind:key="getKabkota.id"
                                            v-bind:value="getKabkota.id">
                                            {{ getKabkota.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select @change="dataKelurahan" name="kecamatan_pemohon" id="kecamatan_pemohon" v-model="kecamatan_pemohon" class="form-control m-2" required>
                                        <option 
                                            class="hidden" 
                                            value="" 
                                            selected disabled>Kecamatan Pemohon *</option>
                                        <option
                                            v-for="getKecamatan in kecamatan"
                                            v-bind:key="getKecamatan.id"
                                            v-bind:value="getKecamatan.id">
                                            {{ getKecamatan.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select name="kelurahan_pemohon" id="kelurahan_pemohon" v-model="kelurahan_pemohon" class="form-control m-2" required>
                                        <option 
                                            class="hidden" 
                                            value="" 
                                            selected disabled>Kelurahan Pemohon *</option>
                                        <option
                                            v-for="getKelurahan in kelurahan"
                                            v-bind:key="getKelurahan.id"
                                            v-bind:value="getKelurahan.id">
                                            {{ getKelurahan.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control is-invalid m-2" name="alamat_pemohon" id="alamat_pemohon" v-model="alamat_pemohon" placeholder="Alamat Lengkap Pemohon *" required></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="checkbox" class="custom-control-input m-2" required>
                                <label class="form-group">Bersedia Membayar Administrasi Sebesar Rp. 50.000,-</label>
                            </div>
                            <div class="col-md-6">
                            </div>
                            <div class="col-md-6">
                                <input type="submit" class="btnlaporan text-center font-white" value="Selanjutnya"/>
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
    name: 'Pemohon',
    data() {
        return {
            dataPermohonan1: [],
            nama_pemohon: '',
            jenis_kelamin_pemohon: '',
            tanggal_lahir_pemohon: '',
            provinsi_pemohon: '',
            kota_pemohon: '',
            kecamatan_pemohon: '',
            kelurahan_pemohon: '',
            alamat_pemohon: '',
            no_telp_pemohon: '',
            email_pemohon: '',
            nama_pembina_pemohon: '',
            nama_dpd_pemohon: '',
            kepentingan: '',

            provinsi: [],
            kabkota: [],
            kecamatan: [],
            kelurahan: [],
        }
    },
    methods: {
        saveDataPemohon () {
            var pemohonStored = {
                "nama_pemohon": this.nama_pemohon,
                "jenis_kelamin_pemohon": this.jenis_kelamin_pemohon,
                "tanggal_lahir_pemohon": this.tanggal_lahir_pemohon,
                "provinsi_pemohon": this.provinsi_pemohon,
                "kota_pemohon": this.kota_pemohon,
                "kecamatan_pemohon": this.kecamatan_pemohon,
                "kelurahan_pemohon": this.kelurahan_pemohon,
                "alamat_pemohon": this.alamat_pemohon,
                "no_telp_pemohon": this.no_telp_pemohon,
                "email_pemohon": this.email_pemohon,
                "nama_pembina_pemohon": this.nama_pembina_pemohon,
                "nama_dpd_pemohon": this.nama_dpd_pemohon,
                "kepentingan": this.kepentingan
            }

            const parsed = JSON.stringify(pemohonStored);
            localStorage.setItem('dataPermohonan1', parsed);
            this.$router.push('/termohon');
        },
        removeDataPemohon() {
            localStorage.removeItem('dataPermohonan1')
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
        }
    },
    mounted() {
        this.dataProvinsi();

        if (localStorage.getItem('dataPermohonan1')) {
            try {
                this.dataPermohonan1 = JSON.parse(localStorage.getItem('dataPermohonan1'));

                this.nama_pemohon = this.dataPermohonan1.nama_pemohon;
                this.jenis_kelamin_pemohon = this.dataPermohonan1.jenis_kelamin_pemohon;
                this.tanggal_lahir_pemohon = this.dataPermohonan1.tanggal_lahir_pemohon;

                this.provinsi_pemohon = this.dataPermohonan1.provinsi_pemohon;
                this.kota_pemohon = this.dataPermohonan1.kota_pemohon;
                this.kecamatan_pemohon = this.dataPermohonan1.kecamatan_pemohon;
                this.kelurahan_pemohon = this.dataPermohonan1.kelurahan_pemohon;

                this.alamat_pemohon = this.dataPermohonan1.alamat_pemohon;
                this.no_telp_pemohon = this.dataPermohonan1.no_telp_pemohon;
                this.email_pemohon = this.dataPermohonan1.email_pemohon;
                this.nama_pembina_pemohon = this.dataPermohonan1.nama_pembina_pemohon;
                this.nama_dpd_pemohon = this.dataPermohonan1.nama_dpd_pemohon;
                this.kepentingan = this.dataPermohonan1.kepentingan;
            } catch(e) {
                localStorage.removeItem('dataPermohonan1')
            }
        }
    }
}
</script>

<style>

</style>