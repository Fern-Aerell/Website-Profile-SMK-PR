<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pembuat extends Model
{
    use HasFactory;

    /**
     * Nama table
     * 
     * @var string
     */
    protected $table = 'pembuat';

    /**
     * Primary key table
     * 
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * timestamps mati
     * 
     * @var bool
     */
    public $timestamps = false;

    /**
     * atribut yang bisa di isi.
     * 
     * @var array<int, string>
     */
    protected $fillable = ['nama'];

    /**
     * atribut cast
     *
     * @var array<string, string>
     */
    protected $casts = [
        'nama' => 'string'
    ];

}
