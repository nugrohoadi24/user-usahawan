<template>
    <div>
        <div class="laporan">
        <div class="row">
            <div class="col-md-3 laporan-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Data Pemohon</h3>
                <p>Silahkan isi data Anda (Pemohon), kami akan bantu prosesnya.</p>
                <a href="/">
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
                                    <textarea class="form-control is-invalid m-2" name="alamat_pemohon" id="alamat_pemohon" v-model="alamat_pemohon" placeholder="Alamat Pemohon *" required></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
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
export default {
    name: 'Pemohon',
    data() {
        return {
            dataPermohonan1: [],
            nama_pemohon: '',
            jenis_kelamin_pemohon: '',
            tanggal_lahir_pemohon: '',
            alamat_pemohon: '',
            no_telp_pemohon: '',
            email_pemohon: '',
            nama_pembina_pemohon: '',
            nama_dpd_pemohon: '',
            kepentingan: '',
        }
    },
    methods: {
        saveDataPemohon () {
            var pemohonStored = {
                "nama_pemohon": this.nama_pemohon,
                "jenis_kelamin_pemohon": this.jenis_kelamin_pemohon,
                "tanggal_lahir_pemohon": this.tanggal_lahir_pemohon,
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
        }
    },
    mounted() {
        if (localStorage.getItem('dataPermohonan1')) {
            try {
                this.dataPermohonan1 = JSON.parse(localStorage.getItem('dataPermohonan1'));
                console.log(this.dataPermohonan1)
            } catch(e) {
                localStorage.removeItem('dataPermohonan1')
            }
        }
    }
}
</script>

<style>

</style>