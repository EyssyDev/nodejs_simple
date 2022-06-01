const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM pinatas', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO pinatas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('¡Piñata registrada!')
        })
    })
})

routes.delete('/:idpinatas', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM pinatas WHERE idpinatas = ?', [req.params.idpinatas], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Piñata eliminada.')
        })
    })
})

routes.put('/:idpinatas', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE pinatas set ? WHERE idpinatas = ?', [req.body, req.params.idpinatas], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Piñata actualizada.')
        })
    })
})

module.exports = routes